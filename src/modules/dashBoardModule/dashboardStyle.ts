import styled from "styled-components";
import { AppColors } from "../../helpers/colors";

export const DashBoardCardWrapper = styled.View`
  border-width: 1px;
  border-color: ${AppColors.borderColor};
  padding: 14px;
  border-radius: 8px;
`;

export const ChartWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const DotsWrapper = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;
