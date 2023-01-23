import styled from "styled-components";
import { AppColors } from "../../helpers/colors";

export const TextInputStyle = styled.TextInput`
  background: ${AppColors.lightGray};
  width: 100%;
  padding: 4%;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  color: ${AppColors.textColor};
`;

export const TextInputWithIconStyle = styled.TextInput`
  background: ${AppColors.lightGray};
  width: 100%;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;

  color: ${AppColors.textColor};
`;

export const TextInputWithIconWrapperStyle = styled.View`
  display: flex;
  flex-direction: row;
  background: ${AppColors.lightGray};
  width: 100%;
  padding: 3.5%;
  border-radius: 4px;
`;

export const TextInputContentStyle = styled.View`
  display: flex;
  flex: 1;
`;

export const IconWrapperStyle = styled(TextInputContentStyle)`
  justify-content: center;
  align-items: flex-end;
  display: flex;
  flex: 0.1;
`;
