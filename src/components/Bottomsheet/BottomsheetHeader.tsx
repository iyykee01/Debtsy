import React from "react";
import { View } from "react-native";

import { TextComponent } from "../Text/TextComponent";
import {
  ButtonsheetHeaderContainerStyle,
  ButtonsheetHeaderContentWrapperStyle,
} from "./BottomSheetHeaderStyle";

export const BottomsheetHeader = () => {
  return (
    <ButtonsheetHeaderContainerStyle>
      <ButtonsheetHeaderContentWrapperStyle background="blue">
        <TextComponent title="P" fontSize="20" />
      </ButtonsheetHeaderContentWrapperStyle>

      <ButtonsheetHeaderContentWrapperStyle>
        <TextComponent title="Profile" fontSize="20" />
      </ButtonsheetHeaderContentWrapperStyle>

      <ButtonsheetHeaderContentWrapperStyle background="red">
        <TextComponent title="P" fontSize="20" />
      </ButtonsheetHeaderContentWrapperStyle>
    </ButtonsheetHeaderContainerStyle>
  );
};
