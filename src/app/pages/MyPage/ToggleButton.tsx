import React, { useRef, useEffect } from 'react';
import { Text, View, Animated, TouchableOpacity, Easing } from 'react-native';

interface ToggleButtonProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
}

export default function ToggleButton ({ isOn, onToggle }:ToggleButtonProps) {
  const positionButton = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(positionButton, {
      toValue: isOn ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [isOn, positionButton]);

  const positionInterPol = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: [3, 27], // Position for the button's circle
  });

  const backgroundColorAnim = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: ['#E9EBED', '#053C57'], // Background color of the toggle
  });

  const buttonColorAnim = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: ['#053C57', '#FFF'], // Color of the button circle (moving part)
  });

  const initialOpacityOn = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const initialOpacityOff = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const onPress = () => {
    onToggle(!isOn);
  };

  return (
    <TouchableOpacity
      style={{ height: 30, width: 60 }}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Animated.View
        style={[
          { height: 30, width: 60, borderRadius: 30 },
          { backgroundColor: backgroundColorAnim },
        ]}
        className="relative"
      >
        <Animated.Text
          style={[
            { position: 'absolute', top: 6, left: 5, fontSize: 14 },
            { color: '#fff' },
            { opacity: initialOpacityOn },
          ]}
        >
          ON
        </Animated.Text>
        <Animated.Text
          style={[
            { position: 'absolute', top: 6, right: 5, fontSize: 14 },
            { color: '#053C57' },
            { opacity: initialOpacityOff },
          ]}
        >
          OFF
        </Animated.Text>
        <Animated.View
          style={[
            {
              height: 15,
              width: 15,
              borderRadius: 20,
              margin:8,
              
            },
            {
              backgroundColor: buttonColorAnim,
              transform: [{ translateX: positionInterPol }],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}