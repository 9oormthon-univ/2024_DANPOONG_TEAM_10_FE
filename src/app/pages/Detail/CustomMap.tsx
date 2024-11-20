import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import WebView from 'react-native-webview';
import * as Location from 'expo-location';

// 축제 내부를 보여주는 커스텀 지도
export default function CustomMap() {
  const webViewRef = useRef<WebView>(null);

  // 서버에서 지도 좌표를 가져오는 함수
  const fetchData = async () => {};

  // 페이지를 불러온 후 webview에서 실행되는 함수
  const onLoaded = async () => {
    // webview의 Initmap 함수 실행
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(`window.initMap()`);
    }
  };

  return (
    <WebView
      ref={webViewRef}
      originWhitelist={['*']}
      javaScriptEnabled={true}
      source={require('./customMap.html')}
      onMessage={(message) => {
        const { nativeEvent } = message;
        console.log('customMap script :', nativeEvent.data);
        if (nativeEvent.data === 'loaded') {
          onLoaded();
        }
      }}
    />
  );
}
