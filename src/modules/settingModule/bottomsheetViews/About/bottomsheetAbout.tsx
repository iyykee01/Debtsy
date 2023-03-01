import React from "react";
import { FlatList, Image, View } from "react-native";
import BottomSheetHeader from "../../../../components/Bottomsheet/BottomSheetHeader";
import {
  ContentWrapperStyle,
  ProfileComponentStyle,
} from "../../../../components/Profile/ProfileComponentStyle";
import { TextComponent } from "../../../../components/Text/TextComponent";
import { AppColors } from "../../../../helpers/colors";
import { ContentWrapper } from "../../../../styles/Container";
import { Spacer } from "../../../../styles/Spacing";
import { HeaderStyle } from "./bottomsheetAboutStyles";

const data = [
  {
    title: "Instagram",
    img: require("../../../../../assets/images/instagram.png"),
  },
  {
    title: "Linkedin",
    img: require("../../../../../assets/images/linkedin.png"),
  },
  {
    title: "Twitter",
    img: require("../../../../../assets/images/twitter.png"),
  },
];

interface ListProps {
  item: any;
  index: number;
}

const ListComponent = ({ item, index }: ListProps) => {
  return (
    <ProfileComponentStyle isIndex={index === 2}>
      <ContentWrapperStyle flex={0.1}>
        <Image source={item.img} />
      </ContentWrapperStyle>

      <ContentWrapperStyle>
        <TextComponent title={item.title} fontSize="16px" fontLight />
      </ContentWrapperStyle>
    </ProfileComponentStyle>
  );
};

interface BottomsheetAboutProps {
  closePressed: () => void;
}

export const BottomsheeAbout = ({ closePressed }: BottomsheetAboutProps) => {
  return (
    <ContentWrapper>
      <BottomSheetHeader title="About" closePressed={closePressed} />
      <Spacer spaceTop="6%" />

      <HeaderStyle>
        <TextComponent
          title="Debtsy v1.0.0"
          fontSize="16px"
          textAlign="center"
          fontMed
        />
        <Spacer spaceTop="1.5%" />

        <TextComponent
          textAlign="center"
          title="Version Number (0294853535)"
          fontSize="16px"
          fontLight
          color={AppColors.textColorFaint}
        />
      </HeaderStyle>

      <Spacer spaceTop="9%" />

      <TextComponent
        title="SOCIALS"
        fontSize="14px"
        fontLight
        color={AppColors.placeholderColor}
      />

      <Spacer spaceTop="2%" />

      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={({ item, index }) => (
          <ListComponent item={item} key={index} index={index} />
        )}
      />
      <Spacer spaceTop="6%" />
    </ContentWrapper>
  );
};
