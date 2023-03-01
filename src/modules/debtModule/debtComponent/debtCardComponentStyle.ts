import styled from "styled-components";
import { AppColors } from "../../../helpers/colors";

export const DebtCardContainer = styled.Pressable`
  padding: 5px 10px 16px 16px;
  border-radius: 10px;
  border: 0.5px solid ${AppColors.borderColor};
`;

export const CheckBoxContainer = styled.Pressable`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1.4px solid ${AppColors.colorGreen};
  align-items: center;
  justify-content: center;
`;
