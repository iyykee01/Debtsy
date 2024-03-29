import styled from "styled-components";
import { AppColors } from "../../helpers/colors";

interface ButtonStyleProps {
  backgroundColor: string;
  isborderOnly: boolean;
}
export const ButtonStyle = styled.Pressable`
  background: ${(props) => props.background || AppColors.colorGreen};
  padding: 4%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: ${(props: ButtonStyleProps) =>
    props.isborderOnly ? `0.5px solid ${AppColors.colorGreen}` : "none"};
`;

export const FlatButtonStyle = styled.Pressable`
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
`;
