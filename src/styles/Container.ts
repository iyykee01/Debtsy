import styled from "styled-components";
import { AppColors } from "../helpers/colors";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${AppColors.colorWhite};
`;

export const ContentWrapper = styled.View`
  display: flex;
  flex: 1;
  margin-horizontal: 5%;
  background-color: ${AppColors.colorWhite};
`;
