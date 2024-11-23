import { useEffect, useRef, useState } from 'react';
import { Platform, View } from 'react-native';
import WebView from 'react-native-webview';
import * as Location from 'expo-location';
import Header from '@/components/layouts/Header';
import FontText from '@/components/theme/FontText';

interface MapProps {
  inPage?: boolean | undefined;
}

// 축제 위치를 표시하는 지도
export default function Map({ inPage }: MapProps) {
  const webViewRef = useRef<WebView>(null);
  // GPS 현위치를 불러오는 함수 -> 서버에서 지도 위치 불러오기
  // const getCurrentLoc = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status === 'granted') {
  //     let loc = await Location.getCurrentPositionAsync({});
  //     return { latitude: loc.coords.latitude, longitude: loc.coords.longitude };
  //   } else {
  //     console.log('location permision denied');
  //     return {};
  //   }
  // };
  // 서버에서 지도 좌표를 가져오는 함수
  const fetchData = async () => {};
  // 페이지를 불러온 후 webview에서 실행되는 함수
  // const onLoaded = async () => {
  //   console.log(111);
  //   const { latitude, longitude } = await getCurrentLoc();
  //   if (!latitude || !longitude) return;
  //   // webview의 Initmap 함수 실행
  //   if (webViewRef.current) {
  //     webViewRef.current.injectJavaScript(
  //       `window.makeMap(${latitude}, ${longitude})`
  //     );
  //   }
  // };

  return (
    <View className="flex-1">
      {inPage ? null : <Header left={<FontText>{'< 돌아가기'}</FontText>} />}
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        // source={require('@/../map/kakaomap.html')}
        source={{ uri: 'http://127.0.0.1:5500/map/kakaomap.html' }}
        // onMessage={(message) => {
        //   const { nativeEvent } = message;
        //   console.log('map script :', nativeEvent.data);
        //   if (nativeEvent.data === 'loaded') {
        //     onLoaded();
        //   }
        // }}
      />
    </View>
  );
}
