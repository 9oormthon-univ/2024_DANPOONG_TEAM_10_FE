import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const REST_API_KEY = "0343215cfea0f7c6261a6146e244fde4";
const REDIRECT_URI = "http://localhost:8081/oauth/kakao";

export default function KaKaoLogin() {

  const INJECTED_JAVASCRIPT = `
    window.ReactNativeWebView.postMessage('message from webView');
    true; // <- Required to indicate synchronous execution
  `;

  const handleKakaoLogin = (data: string) => {
    const exp = "code=";
    const condition = data.indexOf(exp);
    if (condition !== -1) {
      const authorizeCode = data.substring(condition + exp.length);
      requestToken(authorizeCode);
    }
  };

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

      const { access_token: accessToken, refresh_token: refreshToken } =
        response.data;

      if (accessToken) {
        await AsyncStorage.setItem("accessToken", accessToken);
      }

      if (refreshToken) {
        await AsyncStorage.setItem("refreshToken", refreshToken);
      }
      console.log(response.data);
      console.log("AccessToken:", accessToken);
      console.log("RefreshToken:", refreshToken);

      router.push("pages/Signup/Signup");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error("Error requesting token:", e.response?.data || e.message);
      } else {
        console.error("Unexpected error:", e);
      }
    }
  };
  

  return (
    <View className="flex-1 mt-6 bg-white">
      <WebView
        className="flex-1"
        originWhitelist={["*"]}
        scalesPageToFit={false}
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
