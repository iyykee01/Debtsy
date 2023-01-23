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
}: TextComponentProps) => {
  return (
    <>
      <TextStyle
        onPress={onPress}
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
