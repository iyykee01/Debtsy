import { Text } from "react-native";
import { AppColors } from "../../helpers/colors";
import {
  ContentWrapperStyle,
  ProfileComponentStyle,
} from "../Profile/ProfileComponentStyle";
import { TextComponent } from "../Text/TextComponent";

interface ListProps {
  title: string;
  value: string;
  isindex?: boolean;
}

export const ProfileListComoponent = ({ title, value, isindex }: ListProps) => {
  return (
    <ProfileComponentStyle
      paddingVertical="7%"
      style={{ paddingHorizontal: 6 }}
      isIndex={isindex}
    >
      <ContentWrapperStyle flex={1}>
        <TextComponent title={title} fontSize="14px" fontReg />
      </ContentWrapperStyle>

      <ContentWrapperStyle flex={2}>
        <TextComponent
          title={value}
          fontSize="14px"
          fontReg
          color={AppColors.textColorFaint}
          style={{ textAlign: "right" }}
        />
      </ContentWrapperStyle>
    </ProfileComponentStyle>
  );
};
