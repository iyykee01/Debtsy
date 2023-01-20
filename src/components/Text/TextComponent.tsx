import React, { useEffect } from "react";
import * as Font from "expo-font";
import { TextStyle } from "../../styles/TextStyle";

interface TextComponentProps {
  title: string;
  fontSize?: string;
  color?: string;
  fontFamily: string;
  style?: any;
}

export const TextComponent = ({
  title,
  fontSize,
  color,
  fontFamily,
  style,
}: TextComponentProps) => {
  return (
    <>
      <TextStyle
        fontSize={fontSize}
        color={color}
        fontFamily={fontFamily}
        style={style}
      >
        {title}
      </TextStyle>
    </>
  );
};
