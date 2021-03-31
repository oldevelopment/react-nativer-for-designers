import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import { Animated } from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";

const Success = ({ isActive }) => {
  const animation = useRef(null);
  const top = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isActive) {
      Animated.timing(top, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();

      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      animation.current.play();
    } else {
      Animated.timing(top, {
        toValue: vh(100),
        duration: 0,
        useNativeDriver: false,
      }).start();

      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      animation.current.play();
    }
  }, [isActive]);
  return (
    <AnimatedContainer style={{ top: top, opacity: opacity }}>
      <LottieView
        source={require("../assets/lottie-checked-done.json")}
        autoPlay={true}
        loop={false}
        ref={animation}
      />
    </AnimatedContainer>
  );
};
export default Success;
const Container = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
