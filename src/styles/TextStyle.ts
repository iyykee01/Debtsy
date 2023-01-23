import stylesd from "styled-components";
import { AppColors } from "../helpers/colors";

interface IHeaderText {
  fontSize?: number;
  color?: string;
  fontFamily: string;
  fontWeight: string;
}

export const TextStyle = stylesd.Text`
   font-size: ${(props: IHeaderText) => props.fontSize || 12};
   color: ${(props: IHeaderText) => props.color || AppColors.textColor}
   fontFamily: ${(props: IHeaderText) => props.fontFamily || "Roboto"}
   font-weight: ${(props: IHeaderText) => props.fontWeight || "400"}
`;
