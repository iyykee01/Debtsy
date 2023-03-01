import { AppColors } from "../../helpers/colors";
import {
  ContentWrapperStyle,
  ProfileComponentStyle,
} from "../Profile/ProfileComponentStyle";
import { TextComponent } from "../Text/TextComponent";

interface ListProps {
  item: any;
  index: number;
}

export const ProfileListComoponent = ({ item, index }: ListProps) => {
  return (
    <ProfileComponentStyle
      paddingVertical="7%"
      style={{ paddingHorizontal: 6 }}
      isIndex={index === 4}
    >
      <ContentWrapperStyle flex={1}>
        <TextComponent title={item?.title} fontSize="14px" fontReg />
      </ContentWrapperStyle>

      <ContentWrapperStyle flex={2}>
        <TextComponent
          title={item?.value}
          fontSize="14px"
          fontReg
          color={AppColors.textColorFaint}
          style={{ textAlign: "right" }}
        />
      </ContentWrapperStyle>
    </ProfileComponentStyle>
  );
};
