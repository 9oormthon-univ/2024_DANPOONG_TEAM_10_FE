import { useEffect, useRef, useState } from 'react';
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

  // 페이지를 불러온 후 webview에서 실행되는 함수
  const onLoaded = async () => {
    const { latitude, longitude } = await getCurrentLoc();
    if (!latitude || !longitude) return;

    // kakao map 생성
    const script = `
    // 지도 생성
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(${latitude}, ${longitude}),
        level: 5,
    };
    const map = new kakao.maps.Map(container, options); 

    // 마커 생성
    const markerPos = new kakao.maps.LatLng(${latitude}, ${longitude});
    const marker = new kakao.maps.Marker({
    position: markerPos,
    });
    marker.setMap(map);
    
    // 커스텀 오버레이
    const position = new kakao.maps.LatLng(${latitude}, ${longitude});
    const content = '<div style="background: white;  padding: 10px 30px; box-shadow: 0 0 5px grey; border-radius:5px; text-align:center">시청역</div>';
    const customOverlay = new kakao.maps.CustomOverlay({
        map:map,
        position:position,
        content:content,
        yAnchor:2
    })
    `;

    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(script);
    }
  };

  return (
    <WebView
      ref={webViewRef}
      originWhitelist={['*']}
      javaScriptEnabled={true}
      source={require('./kakaomap.html')}
      onLoadEnd={onLoaded}
    />
  );
}
