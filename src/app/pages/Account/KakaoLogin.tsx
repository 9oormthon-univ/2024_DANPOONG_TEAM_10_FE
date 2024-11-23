import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import FontText from "@/components/theme/FontText";

const REST_API_KEY = "d51ac270bfb5f0dfec0363417fe2f9c0";
const REDIRECT_URI = "http://localhost:8081/oauth/kakao";

export default function KaKaoLogin() {
  const [userInfo, setUserInfo] = useState<any | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const INJECTED_JAVASCRIPT = `
    window.ReactNativeWebView.postMessage('message from webView');
    true; // <- Required to indicate synchronous execution
  `;

  const handleKakaoLogin = (data: string) => {
    console.log(data);
    const exp = "code=";
    const condition = data.indexOf(exp);
    if (condition !== -1) {
      const authorizeCode = data.substring(condition + exp.length);
      requestToken(authorizeCode);
    }
  };

  //로그인
  const requestToken = async (authorizeCode: string) => {
    try {
      const params = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: authorizeCode,
      });

      const response = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const { access_token: accessToken, refresh_token: refreshToken } = response.data;

      if (accessToken) {
        await AsyncStorage.setItem("accessToken", accessToken);
        setAccessToken(accessToken);
        fetchUserInfo(accessToken);
      }

      if (refreshToken) {
        await AsyncStorage.setItem("refreshToken", refreshToken);
      }
      console.log('accessToken:',accessToken);
      console.log('refreshToken:',refreshToken);

      router.push("pages/Modal/AccountModal");
    } catch (e) {
      console.error("Error requesting token:", e);
    }
  };

  //리프레시토큰
  const refreshAccessToken = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      if (!refreshToken) {
        console.log("Refresh token이 없습니다. 다시 로그인해야 합니다.");
        Alert.alert("세션이 만료되었습니다. 다시 로그인하세요.");
        return null;
      }
  
      const params = new URLSearchParams({
        grant_type: "refresh_token",
        client_id: REST_API_KEY,
        refresh_token: refreshToken,
      });
  
      const response = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
  
      const { access_token: newAccessToken , refresh_token: newRefreshToken} = response.data;
  
      if (newAccessToken) {
        await AsyncStorage.setItem("accessToken", newAccessToken);
        console.log("새로운 refresh token 저장:", newRefreshToken);
        console.log("Access token 갱신 성공:", newAccessToken);
        return newAccessToken;
      } else {
        console.log("Access token 갱신 실패.");
      return null;
      }
    } catch (e) {
      console.error("Error refreshing access token:", e);
      Alert.alert("토큰 갱신 중 오류 발생. 다시 로그인하세요.");
      return null;
    }
  };
  
  // 유저 정보
  const fetchUserInfo = async (token: string) => {
    try {
      const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserInfo(response.data);
      console.log("유저 정보:", response.data.kakao_account?.name,
                  "이메일:", response.data.kakao_account?.email);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        console.log("Access token 만료됨. 갱신 시도 중...");
        const newToken = await refreshAccessToken();
        if (newToken) {
          fetchUserInfo(newToken); // 새 토큰으로 다시 시도
        }
      } else {
        console.error("Error fetching user info:", error);
        Alert.alert("유저 정보 가져오기 실패");
      }
    }
  };

 useEffect(() => {
    const getAccessToken = async () => {
      const storedToken = await AsyncStorage.getItem("accessToken");
      if (storedToken) {
        setAccessToken(storedToken);
        fetchUserInfo(storedToken);
      }
    };

    getAccessToken(); // 앱 초기화 시 토큰이 있으면 유저 정보를 바로 요청
  }, []); 

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* 로그인 웹뷰 */}
      <WebView
        style={{ flex: 1 }}
        originWhitelist={["*"]}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => handleKakaoLogin(event.nativeEvent.url)}
      />
    </View>
  );
}
