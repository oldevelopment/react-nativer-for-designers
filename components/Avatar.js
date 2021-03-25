import React from "react";
import styled from "styled-components/native";

const Avatar = ({ userPic }) => <Image source={{ uri: userPic }} />;
export default Avatar;
const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
  margin-right: 20px;
`;
