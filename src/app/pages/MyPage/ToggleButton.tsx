import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, Easing } from 'react-native';

interface ToggleButtonProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
}

export default function ToggleButton({ isOn, onToggle }: ToggleButtonProps) {
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
    outputRange: [3, 27],
  });

  const backgroundColorAnim = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: ['#E9EBED', '#053C57'],
  });

  const buttonColorAnim = positionButton.interpolate({
    inputRange: [0, 1],
    outputRange: ['#053C57', '#FFF'],
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
      onPress={onPress}
      activeOpacity={0.9}
      className="h-[30px] w-[60px]"
    >
      <Animated.View
        style={{ backgroundColor: backgroundColorAnim }}
        className="h-[30px] w-[60px] rounded-full relative"
      >
        <Animated.Text
          style={{ opacity: initialOpacityOn }}
          className="absolute top-[6px] left-[5px] text-sm text-white"
        >
          ON
        </Animated.Text>
        <Animated.Text
          style={{ opacity: initialOpacityOff }}
          className="absolute top-[6px] right-[5px] text-sm text-[#053C57]"
        >
          OFF
        </Animated.Text>
        <Animated.View
          style={{
            backgroundColor: buttonColorAnim,
            transform: [{ translateX: positionInterPol }],
          }}
          className="h-[15px] w-[15px] rounded-full m-[8px]"
        />
      </Animated.View>
    </TouchableOpacity>
  );
}
