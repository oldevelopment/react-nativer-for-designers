import React, { useEffect } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { vw } from "react-native-expo-viewport-units";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import * as Icon from "@expo/vector-icons";

const VideoScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Video
        source={{
          uri:
            "https://player.vimeo.com/external/281472837.hd.mp4?s=c78b611b5055e373c69b6dd7674e2051128bc7b8&profile_id=175",
        }}
        shouldPlay
        useNativeControls={true}
        resizeMode="cover"
        style={{ width: vw(100), height: 210 }}
      />
      <CloseView>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ padding: 20 }}
        >
          <Icon.Ionicons name="ios-close" size={44} color="white" />
        </TouchableOpacity>
      </CloseView>
    </Container>
  );
};

export default VideoScreen;

const Container = styled.View`
  flex: 1;
  background: black;
  align-items: center;
  justify-content: center;
`;

const CloseView = styled.View`
  position: absolute;
  top: 0px;
  right: 12px;
`;
