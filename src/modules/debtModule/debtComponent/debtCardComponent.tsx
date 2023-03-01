import React from "react";

import { ProfileComponent } from "../../../components/Profile/ProfileComponent";
import { TextComponent } from "../../../components/Text/TextComponent";
import { AppColors } from "../../../helpers/colors";
import { Spacer } from "../../../styles/Spacing";
import { CheckBoxContainer, DebtCardContainer } from "./debtCardComponentStyle";
import Ionicons from "@expo/vector-icons/Ionicons";

interface DebtCardComponentProps {
  onPress?: () => void;
}

export const DebtCardComponent = ({ onPress }: DebtCardComponentProps) => {
  return (
    <>
      <DebtCardContainer onPress={onPress}>
        <Spacer spaceTop="-1%" />
        <ProfileComponent
          imgSrc={require("../../../../assets/images/menu-scale.png")}
          title="Student Loan"
          isIndex
          onPress={() => {}}
          style={{ width: 20, height: 20 }}
        />
        <Spacer spaceTop="-1%" />
        <TextComponent title="$8,090.00" fontBold fontSize="16px" />
        <Spacer spaceTop="1.8%" />
        <TextComponent
          title="Paid - $4,000"
          fontLight
          fontSize="14px"
          color={AppColors.placeholderColor}
        />
        <Spacer spaceTop="1.8%" />
        <TextComponent
          title="Unpaid - $4,090"
          fontLight
          fontSize="14px"
          color={AppColors.placeholderColor}
        />
      </DebtCardContainer>
      <Spacer spaceBottom="4%" />
    </>
  );
};

interface CheckBoxProps {
  onPress?: () => void;
  isChecked?: boolean;
}

export const CheckBox = ({ onPress, isChecked }: CheckBoxProps) => {
  return (
    <CheckBoxContainer onPress={onPress}>
      {isChecked && (
        <Ionicons
          name="checkmark-outline"
          size={20}
          color={AppColors.colorGreen}
          onPress={onPress}
        />
      )}
    </CheckBoxContainer>
  );
};
