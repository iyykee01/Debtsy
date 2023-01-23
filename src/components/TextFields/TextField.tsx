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
}

export const TextField = ({
  fieldHeader,
  hasHeader,
  placeholder,
  autoFocus,
  keyboardType,
  innerRef,
  onSubmitEditing,
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
            textContentType="oneTimeCode"
          />
        </TextInputContentStyle>

        <IconWrapperStyle>
          <Ionicons
            name={iconName}
            size={20}
            color={AppColors.textColor}
            onPress={onPress}
          />
        </IconWrapperStyle>
      </TextInputWithIconWrapperStyle>
    </>
  );
};
