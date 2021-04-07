import React from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

const Avatar = () => {
  const avatar = useSelector((state) => state.avatar);

  return (
    <>
      <Image source={avatar} />
    </>
  );
};
export default Avatar;
const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
  margin-right: 20px;
`;
