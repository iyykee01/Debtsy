import React from "react";
import { Image } from "react-native";
import { AppColors } from "../../helpers/colors";
import { TextComponent } from "../Text/TextComponent";
import {
  ProfileComponentStyle,
  ContentWrapperStyle,
  RightIconWrapperStyle,
} from "./ProfileComponentStyle";
import { Ionicons } from "@expo/vector-icons";

interface ProfileComponentProps {
  title: string;
  imgSrc?: any;
  onPress?: () => void;
  isIndex?: boolean;
  style?: any;
}

export const ProfileComponent = ({
  imgSrc,
  title,
  onPress,
  isIndex,
  style,
}: ProfileComponentProps) => {
  return (
    <>
      <ProfileComponentStyle onPress={onPress} isIndex={isIndex}>
        <ContentWrapperStyle flex={0.2}>
          <Image source={imgSrc} style={style} />
        </ContentWrapperStyle>

        <ContentWrapperStyle>
          <TextComponent title={title} fontSize="16px" fontReg />
        </ContentWrapperStyle>

        <ContentWrapperStyle>
          <RightIconWrapperStyle>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color={AppColors.placeholderColor}
            />
          </RightIconWrapperStyle>
        </ContentWrapperStyle>
      </ProfileComponentStyle>
    </>
  );
};

interface ProfileComponentNoImageProps {
  title: string;
  isIndex?: boolean;
  onPress?: () => void;
}

export const ProfileComponentNoImage = ({
  title,
  isIndex,
  onPress,
}: ProfileComponentNoImageProps) => {
  return (
    <>
      <ProfileComponentStyle isIndex={isIndex} onPress={onPress}>
        <ContentWrapperStyle>
          <TextComponent title={title} fontSize="16px" fontLight />
        </ContentWrapperStyle>

        <ContentWrapperStyle>
          <RightIconWrapperStyle>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color={AppColors.placeholderColor}
            />
          </RightIconWrapperStyle>
        </ContentWrapperStyle>
      </ProfileComponentStyle>
    </>
  );
};
