import { useFonts } from "expo-font";
import React from "react";
import { Text } from "react-native";
import { AppColors } from "../../colors/colors";
import { TextComponent } from "../Text/TextComponent";
import { ButtonStyle, FlatButtonStyle } from "./ButtonStyle";

interface ButtonProps {
  title: string;
  backgroundColor?: string;
}

export const ButtonComponent = ({ title, backgroundColor }: ButtonProps) => {
  const [loadedFont] = useFonts({
    InterRegular: require("../../../assets/fonts/Inter-Regular.ttf"),
  });

  if (!loadedFont) return null;

  return (
    <ButtonStyle backgroundColor={backgroundColor}>
      <TextComponent
        title={title}
        color={AppColors.colorWhite}
        fontFamily="InterMedium"
        fontSize="15"
      />
    </ButtonStyle>
  );
};

interface FlatButtonProps {
  title1: string;
  title2: string;
}

export const FlatButtonComponent = ({ title1, title2 }: FlatButtonProps) => {
  const [loadedFont] = useFonts({
    InterThin: require("../../../assets/fonts/Inter-Thin.ttf"),
  });

  if (!loadedFont) return null;

  return (
    <FlatButtonStyle>
      <TextComponent
        title={title1}
        color={AppColors.textColor}
        fontFamily="InterThin"
        fontSize="15"
        style={{ color: "red" }}
      />
      <TextComponent
        title={title2}
        color={AppColors.colorGreen}
        fontFamily="InterThin"
        fontSize="15"
      />
    </FlatButtonStyle>
  );
};
