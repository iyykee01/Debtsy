import React from "react";
import { FlatList } from "react-native";
import BottomSheetHeader from "../../../../components/Bottomsheet/BottomSheetHeader";
import { ButtonComponent } from "../../../../components/Button/ButtonComponent";

import { ProfileListComoponent } from "../../../../components/ProfileListCompontent/ProfileListComoponent";
import { Scroller } from "../../../../components/Scroller/Scroller";
import { TextComponent } from "../../../../components/Text/TextComponent";
import { AppColors } from "../../../../helpers/colors";
import { ContentWrapper } from "../../../../styles/Container";
import { Spacer } from "../../../../styles/Spacing";
import {
  AvatarImage,
  ImageIcon,
  ProfileImageWrapper,
} from "./bottomsheetProfileStyle";

const data = [
  {
    title: "Full name",
    value: "Stella Jameson",
  },
  {
    title: "Email",
    value: "Stellajameson@gmail.com",
  },
  {
    title: "Phone number",
    value: "+1 (416) 123-456",
  },
  {
    title: "Password",
    value: "@@@@@@@@@@",
  },
  {
    title: "Country",
    value: "Canada",
  },
];

interface BottomsheetProfileProps {
  closePressed: () => void;
}
export const BottomsheetProfile = ({
  closePressed,
}: BottomsheetProfileProps) => {
  return (
    <ContentWrapper>
      <BottomSheetHeader title="Profile" closePressed={closePressed} />
      <Scroller>
        <Spacer spaceTop="2%" />

        <ProfileImageWrapper>
          <AvatarImage
            source={require("../../../../../assets/images/test.jpeg")}
          />
          <ImageIcon
            source={require("../../../../../assets/images/camera.png")}
          />
        </ProfileImageWrapper>

        <Spacer spaceTop="7%" />

        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({ item, index }) => (
            <ProfileListComoponent item={item} key={index} index={index} />
          )}
        />

        <Spacer spaceTop="10%" />

        <ButtonComponent
          title="Edit Profile"
          isborderOnly
          backgroundColor="transparent"
          color={AppColors.textColor}
        />

        <Spacer spaceTop="3%" />
        <ButtonComponent title="Change Password" />
        <Spacer spaceTop="10%" />
      </Scroller>
    </ContentWrapper>
  );
};
