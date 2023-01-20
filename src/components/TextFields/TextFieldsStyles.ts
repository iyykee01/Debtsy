import styled from "styled-components";
import { AppColors } from "../../colors/colors";

export const TextInputStyle = styled.TextInput`
  background: ${AppColors.lightGray};
  width: 100%;
  padding: 4%;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${AppColors.textColor};
`;
