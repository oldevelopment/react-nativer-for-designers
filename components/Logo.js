import React from "react";

import styled from "styled-components";

const Logo = ({ image, name }) => {
  console.log();
  return (
    <Container style={{ elevation: 8 }}>
      <LogoImage source={{ uri: image }} resizeMode="contain" />
      <Name>{name}</Name>
    </Container>
  );
};
export default Logo;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  margin-left: 11px;
  margin-right: 11px;
`;
const LogoImage = styled.Image`
  width: 36px;
  height: 36px;
`;
const Name = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
