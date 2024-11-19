import { useEffect, useRef, useState } from 'react';
import { Platform, View } from 'react-native';
import WebView from 'react-native-webview';
import * as Location from 'expo-location';

export default function Map() {
  const webViewRef = useRef<WebView>(null);

  // GPS 현위치를 불러오는 함수 -> 서버에서 지도 위치 불러오기
  const getCurrentLoc = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      let loc = await Location.getCurrentPositionAsync({});
      return { latitude: loc.coords.latitude, longitude: loc.coords.longitude };
    } else {
      console.log('location permision denied');
      return {};
    }
  };

  // 서버에서 지도 좌표를 가져오는 함수
  const fetchData = async () => {};

  // 페이지를 불러온 후 webview에서 실행되는 함수
  const onLoaded = async () => {
    const { latitude, longitude } = await getCurrentLoc();
    if (!latitude || !longitude) return;

    // webview의 Initmap 함수 실행
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(
        `window.initMap(${latitude}, ${longitude})`
      );
    }
  };

  return (
    <View className="flex-1 rounded-xl overflow-hidden ">
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        source={require('./kakaomap.html')}
        onMessage={(message) => {
          const { nativeEvent } = message;
          console.log('map script :', nativeEvent.data);
          if (nativeEvent.data === 'loaded') {
            onLoaded();
          }
        }}
      />
    </View>
  );
}
