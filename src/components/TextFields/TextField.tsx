import { AppColors } from "../../helpers/colors";
import { Spacer } from "../../styles/Spacing";
import { TextComponent } from "../Text/TextComponent";
import {
  IconWrapperStyle,
  TextInputContentStyle,
  TextInputStyle,
  TextInputWithIconStyle,
  TextInputWithIconWrapperStyle,
} from "./TextFieldsStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

interface TextFieldProps {
  fieldHeader: string;
  hasHeader?: boolean;
  placeholder?: string;
  keyboardType?: string;
  autoFocus?: boolean;
  isPassword?: boolean;
  onPress?: () => void;
  showPassword?: boolean;
  iconName?: any;
  innerRef?: any;
  onSubmitEditing?: () => void;
  color?: string;
  size?: number;
  onChangeText?: (text: string) => void;
  value?: string;
}

export const TextField = ({
  fieldHeader,
  hasHeader,
  placeholder,
  autoFocus,
  keyboardType,
  innerRef,
  onSubmitEditing,
  onChangeText,
  value,
}: TextFieldProps) => {
  return (
    <>
      {hasHeader ? (
        <>
          <TextComponent title={fieldHeader} fontSize="16px" fontReg />
          <Spacer spaceBottom="2%" />
        </>
      ) : null}

      <TextInputStyle
        autoFocus={autoFocus}
        placeholder={placeholder}
        placeholderTextColor={AppColors.placeholderColor}
        keyboardType={keyboardType}
        ref={innerRef}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        value={value}
      />
    </>
  );
};

export const TextFieldWithRightIcon = ({
  fieldHeader,
  hasHeader,
  placeholder,
  autoFocus,
  keyboardType,
  isPassword,
  onPress,
  iconName,
  innerRef,
  onSubmitEditing,
  color,
  size,
  onChangeText,
  value,
}: TextFieldProps) => {
  return (
    <>
      {hasHeader ? (
        <>
          <TextComponent title={fieldHeader} fontSize="16px" fontReg />
          <Spacer spaceBottom="2%" />
        </>
      ) : null}

      <TextInputWithIconWrapperStyle>
        <TextInputContentStyle>
          <TextInputWithIconStyle
            autoFocus={autoFocus}
            placeholder={placeholder}
            placeholderTextColor={AppColors.placeholderColor}
            keyboardType={keyboardType || "default"}
            secureTextEntry={isPassword ? true : false}
            ref={innerRef}
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChangeText}
            value={value}
          />
        </TextInputContentStyle>

        <IconWrapperStyle>
          <Ionicons
            name={iconName}
            size={size || 20}
            color={color || AppColors.textColor}
            onPress={onPress}
          />
        </IconWrapperStyle>
      </TextInputWithIconWrapperStyle>
    </>
  );
};
