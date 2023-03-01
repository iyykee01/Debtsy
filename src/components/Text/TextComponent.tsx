import { TextStyle } from "../../styles/TextStyle";

interface TextComponentProps {
  title: string;
  fontSize?: string;
  color?: string;
  style?: any;
  fontReg?: boolean;
  fontBold?: boolean;
  fontMed?: boolean;
  fontLight?: boolean;
  onPress?: () => void;
  textAlign?: string;
  underline?: string;
}

export const TextComponent = ({
  title,
  fontSize,
  color,
  style,
  fontReg,
  fontBold,
  fontMed,
  fontLight,
  onPress,
  textAlign,
  underline,
}: TextComponentProps) => {
  return (
    <>
      <TextStyle
        underline={underline}
        onPress={onPress}
        textAlign={textAlign}
        fontSize={fontSize}
        color={color}
        fontFamily={
          fontReg
            ? "InterRegular"
            : fontBold
            ? "InterBold"
            : fontMed
            ? "InterMedium"
            : fontLight
            ? "InterLight"
            : "InterThin"
        }
        style={style}
      >
        {title}
      </TextStyle>
    </>
  );
};
