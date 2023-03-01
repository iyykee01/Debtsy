import { Dimensions } from "react-native";
import styled from "styled-components";

const height = Dimensions.get("window").height;

export const DebtContentWrapper = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${-height / 6}px;
`;

export const DebtImageStyle = styled.Image`
  height: 80px;
  width: 80px;
`;

export const PlusImageWrapperStyle = styled.Pressable`
  position: absolute;
  right: -10px;
  bottom: 10px;
`;
