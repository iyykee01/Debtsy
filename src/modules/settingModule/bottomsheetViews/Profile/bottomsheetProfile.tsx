import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

import BottomSheetHeader from "../../../../components/Bottomsheet/BottomSheetHeader";
import { ButtonComponent } from "../../../../components/Button/ButtonComponent";

import { ProfileListComoponent } from "../../../../components/ProfileListCompontent/ProfileListComoponent";
import { Scroller } from "../../../../components/Scroller/Scroller";
import { AppColors } from "../../../../helpers/colors";
import { useAppSelector } from "../../../../redux/hook";
import { ContentWrapper } from "../../../../styles/Container";
import { Spacer } from "../../../../styles/Spacing";
import {
  AvatarImage,
  ImageIcon,
  ProfileImageWrapper,
} from "./bottomsheetProfileStyle";

interface BottomsheetProfileProps {
  closePressed: () => void;
  closeNavigate?: () => void;
}
export const BottomsheetProfile = ({
  closePressed,
  closeNavigate,
}: BottomsheetProfileProps) => {
  const user = useAppSelector((state) => state.user.user);

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

        <ProfileListComoponent
          title="Full Name"
          value={`${user?.firstname} ${user?.lastname}`}
        />
        <ProfileListComoponent title="Email" value={user?.email} />
        <ProfileListComoponent title="User Name" value={user?.username} />
        <ProfileListComoponent
          title="Phone number"
          value={user?.phonenumber || "Nil"}
        />
        <ProfileListComoponent
          title="Country"
          value={user?.country || "Nil"}
          isindex
        />

        <Spacer spaceTop="10%" />

        <ButtonComponent
          title="Edit Profile"
          isborderOnly
          backgroundColor="transparent"
          color={AppColors.textColor}
          onPress={closeNavigate}
        />

        <Spacer spaceTop="3%" />
        <ButtonComponent title="Change Password" />
        <Spacer spaceTop="10%" />
      </Scroller>
    </ContentWrapper>
  );
};
