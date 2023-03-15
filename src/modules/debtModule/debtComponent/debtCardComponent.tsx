import React from "react";

import { ProfileComponent } from "../../../components/Profile/ProfileComponent";
import { TextComponent } from "../../../components/Text/TextComponent";
import { AppColors } from "../../../helpers/colors";
import { Spacer } from "../../../styles/Spacing";
import { CheckBoxContainer, DebtCardContainer } from "./debtCardComponentStyle";
import Ionicons from "@expo/vector-icons/Ionicons";

interface DebtCardComponentProps {
  onPress?: () => void;
  item: any;
}

export const DebtCardComponent = ({
  onPress,
  item,
}: DebtCardComponentProps) => {
  return (
    <>
      <DebtCardContainer onPress={onPress}>
        <Spacer spaceTop="-1%" />
        <ProfileComponent
          imgSrc={require("../../../../assets/images/menu-scale.png")}
          title={item?.name}
          isIndex
          style={{ width: 20, height: 20 }}
        />
        <Spacer spaceTop="-1%" />
        <TextComponent
          title={`$${
            parseInt(item?.paidAmount) + parseInt(item?.unpaidAmount)
          }`}
          fontBold
          fontSize="16px"
        />
        <Spacer spaceTop="1.8%" />
        <TextComponent
          title={`Paid - $${item?.paidAmount || 0}`}
          fontLight
          fontSize="14px"
          color={AppColors.placeholderColor}
        />
        <Spacer spaceTop="1.8%" />
        <TextComponent
          title={`Unpaid - $${item?.unpaidAmount - item?.paidAmount}`}
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
