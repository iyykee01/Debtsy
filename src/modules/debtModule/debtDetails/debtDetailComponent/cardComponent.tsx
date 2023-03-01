import { Image } from "react-native";
import { TextComponent } from "../../../../components/Text/TextComponent";
import { FlexedItemsWrapper, RowFlexed } from "../debDetailsStyles";

interface CardComponentProps {
  title: string;
  date: string;
  imgSrc: any;
  color?: string;
  borderWidth?: string;
  borderColor?: string;
}

export const CardComponent = ({
  title,
  date,
  imgSrc,
  color,
  borderWidth,
  borderColor,
}: CardComponentProps) => {
  return (
    <RowFlexed
      padding="3%"
      backgroundColor={color}
      borderRadius="8px"
      borderWidth={borderWidth}
      borderColor={borderColor}
    >
      <FlexedItemsWrapper flex={0.4} alignItems="flex-start">
        <Image source={imgSrc} style={{ width: 32, height: 32 }} />
      </FlexedItemsWrapper>

      <FlexedItemsWrapper alignItems="flex-start" flex={1.9}>
        <TextComponent title={title} fontSize="14px" fontReg />
      </FlexedItemsWrapper>

      <FlexedItemsWrapper alignItems="flex-end">
        <TextComponent title={date} fontSize="14px" fontLight />
      </FlexedItemsWrapper>
    </RowFlexed>
  );
};
