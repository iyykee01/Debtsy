import React from "react";
import { AppColors } from "../../colors/colors";
import { Spacer } from "../../styles/Spacing";
import { TextComponent } from "../Text/TextComponent";
import { TextInputStyle } from "./TextFieldsStyles";

interface TextFieldProps {
  fieldHeader: string;
  hasHeader?: boolean;
  placeholder?: string;
}

export const TextField = ({
  fieldHeader,
  hasHeader,
  placeholder,
}: TextFieldProps) => {
  return (
    <>
      {hasHeader ? (
        <>
          <TextComponent
            title={fieldHeader}
            fontSize="15"
            fontFamily="InterLight"
          />
          <Spacer spaceBottom="2" />
        </>
      ) : null}

      <TextInputStyle
        placeholder={placeholder}
        placeholderTextColor={AppColors.placeholderColor}
      />
    </>
  );
};
