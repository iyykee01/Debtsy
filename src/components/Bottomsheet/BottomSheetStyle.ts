import styled from "styled-components";
import { AppColors } from "../../helpers/colors";

export const BottomsheetWrapperStyle = styled.SafeAreaView`
  display: flex;
  flex: 1;
`;

export const BottomsheetContainerStyle = styled(BottomsheetWrapperStyle)``;

export const BottomsheetContentWrapperStyle = styled.View`
  backgroundcolor: ${AppColors.colorWhite};
  height: ${(props) => props.height || "80%"};
`;
//
