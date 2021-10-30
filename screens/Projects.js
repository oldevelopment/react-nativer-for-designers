import React, { useRef, useState } from "react";
import { Animated, PanResponder } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { vh } from "react-native-expo-viewport-units";
import styled from "styled-components/native";
import Project from "../components/Project";
import { WorkQuery } from "../Queries";
import { gql, useQuery, ApolloClient } from "@apollo/client";

const Projects = () => {
  const AllReducers = useSelector((state) => state);
  const { loading: WorkLoading, data: WorkData } = useQuery(WorkQuery);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(0.9)).current;
  const translateY = useRef(new Animated.Value(44)).current;
  const thirdScale = useRef(new Animated.Value(0.8)).current;
  const thirdTranslateY = useRef(new Animated.Value(-50)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const nextIndex = (index) => {
    if (index >= WorkData.workCollection.items.length - 1) {
      return 0;
    } else {
      return index + 1;
    }
  };

  const resp = PanResponder.create({
    onMoveShouldSetPanResponder: (e, gestureState) => {
      return (gestureState.dx === 0 && gestureState.dy === 0) ||
        AllReducers.action === "disableGesture"
        ? false
        : true;
    },
    onPanResponderGrant: () => {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      Animated.spring(thirdScale, {
        toValue: 0.9,
        useNativeDriver: false,
      }).start();
      Animated.spring(thirdTranslateY, {
        toValue: 44,
        useNativeDriver: false,
      }).start();
      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    },

    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      const positionY = pan.y;
      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      if (positionY._value > 200) {
        Animated.timing(pan, {
          toValue: { x: 0, y: 1000 },
          useNativeDriver: false,
        }).start(() => {
          pan.setValue({ x: 0, y: 0 });
          scale.setValue(0.9);
          translateY.setValue(44);
          thirdScale.setValue(0.8);
          thirdTranslateY.setValue(-50);
          setIndex((index) => nextIndex(index));
        });
      } else {
        Animated.spring(pan, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: false,
        }).start();

        // second card
        Animated.spring(scale, {
          toValue: 0.9,
          useNativeDriver: false,
        }).start();
        Animated.spring(translateY, {
          toValue: 44,
          useNativeDriver: false,
        }).start();

        // Third Card
        Animated.spring(thirdScale, {
          toValue: 0.8,
          useNativeDriver: false,
        }).start();
        Animated.spring(thirdTranslateY, {
          toValue: -50,
          useNativeDriver: false,
        }).start();
      }
    },
  });
  return (
    <Container style={{ marginTop: 30 }}>
      <AnimatedMask style={{ opacity: opacity }} />
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...resp.panHandlers}
      > 
                  <Project
                    title={WorkData && WorkData.workCollection.items[index].title}
                    author={WorkData && WorkData.workCollection.items[index].author}
                    image={WorkData && WorkData.workCollection.items[index].image}
                    text={WorkData && WorkData.workCollection.items[index].text}
                    shouldOpen={true}
                  />
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          transform: [{ scale: scale }, { translateY: translateY }],
        }}
      >
        <Project
          title={WorkData && WorkData.workCollection.items[nextIndex(index)].title}
          author={WorkData && WorkData.workCollection.items[nextIndex(index)].author}
          image={WorkData && WorkData.workCollection.items[nextIndex(index)].image}
          text={WorkData && WorkData.workCollection.items[nextIndex(index)].text}
          shouldOpen={false}
        />
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -3,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          transform: [{ scale: thirdScale }, { translateY: thirdTranslateY }],
        }}
      >
        <Project
          title={WorkData && WorkData.workCollection.items[nextIndex(index + 1)].title}
          author={WorkData && WorkData.workCollection.items[nextIndex(index + 1)].author}
          image={WorkData && WorkData.workCollection.items[nextIndex(index + 1)].image}
          text={WorkData && WorkData.workCollection.items[nextIndex(index + 1)].text}
          shouldOpen={false}
        />
      </Animated.View>
    </Container>
  );
};
export default Projects;

const projects = [];
const Container = styled.View`
  flex: 1;
  background: #f0f3f5;
  justify-content: center;
  align-items: center;
`;
const Mask = styled.View`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  top: -30px;
  left: 0;
  width: 100%;
  height: ${vh(100)}px;

  z-index: -3;
`;

const AnimatedMask = Animated.createAnimatedComponent(Mask);
