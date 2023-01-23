import React from "react";
import { ActivityIndicator } from "react-native";
import { AppColors } from "../../helpers/colors";
import { TextComponent } from "../Text/TextComponent";
import { ButtonStyle, FlatButtonStyle } from "./ButtonStyle";

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  onPress?: () => void;
  isLoading?: boolean;
}

export const ButtonComponent = ({
  title,
  backgroundColor,
  onPress,
  isLoading,
}: ButtonProps) => {
  return (
    <ButtonStyle backgroundColor={backgroundColor} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={AppColors.colorWhite} />
      ) : (
        <TextComponent
          title={title}
          color={AppColors.colorWhite}
          fontMed
          fontSize="16px"
        />
      )}
    </ButtonStyle>
  );
};

interface FlatButtonProps {
  title1: string;
  title2: string;
  fontSize?: string;
  onPress?: () => void;
}

export const FlatButtonComponent = ({
  title1,
  title2,
  fontSize,
  onPress,
}: FlatButtonProps) => {
  return (
    <FlatButtonStyle onPress={onPress}>
      <TextComponent
        title={title1}
        color={AppColors.textColor}
        fontReg
        fontSize={fontSize || "15px"}
      />
      <TextComponent
        title={title2}
        color={AppColors.colorGreen}
        fontMed
        fontSize="16px"
      />
    </FlatButtonStyle>
  );
};
