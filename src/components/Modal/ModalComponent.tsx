import React from "react";
import { ActivityIndicator, Modal, Text } from "react-native";
import { AppColors } from "../../helpers/colors";
import { Container } from "../../styles/Container";
import { Spacer } from "../../styles/Spacing";
import { TextComponent } from "../Text/TextComponent";
import { ModalStyle } from "./ModalStyle";

interface ModalComponentProps {
  visible: boolean;
}

export const ModalComponent = ({ visible }: ModalComponentProps) => {
  return (
    <Modal visible={visible}>
      <ModalStyle>
        <ActivityIndicator size="large" color={AppColors.textColor} />
        <Spacer spaceBottom="3%" />
        <TextComponent
          title="Customizing your dashboard..."
          fontSize="15px"
          fontLight
          color={AppColors.textColorFaint}
        />
      </ModalStyle>
    </Modal>
  );
};
