import React from "react";
import { View } from "react-native";
import { TextComponent } from "../Text/TextComponent";
import {
  ProfileComponentStyle,
  ContentWrapperStyle,
} from "./ProfileComponentStyle";

export const ProfileComponent = () => {
  return (
    <ProfileComponentStyle>
      <ContentWrapperStyle flex="0.1">
        <TextComponent title="P" fontSize="20" />
      </ContentWrapperStyle>

      <ContentWrapperStyle>
        <TextComponent title="Profile" />
      </ContentWrapperStyle>

      <ContentWrapperStyle>
        <View style={{ alignItems: "flex-end" }}>
          <TextComponent title=">" />
        </View>
      </ContentWrapperStyle>
    </ProfileComponentStyle>
  );
};
