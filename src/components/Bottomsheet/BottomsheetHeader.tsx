import {
  ButtomsheetHeaderContainerStyle,
  ButtomsheetContentWrapperStyle,
  ButtonsheetCloseButtonContainerStyle,
} from "./BottomsheetHeaderStyle";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "../../helpers/colors";
import { TextComponent } from "../Text/TextComponent";

import { Image } from "react-native";

interface BottomSheetHeaderProps {
  title: string;
  closePressed?: () => void;
  isLegal?: boolean;
}

const BottomSheetHeader = ({
  title,
  closePressed,
  isLegal,
}: BottomSheetHeaderProps) => {
  return (
    <ButtomsheetHeaderContainerStyle>
      <ButtomsheetContentWrapperStyle>
        {isLegal && (
          <Ionicons
            name="chevron-back-outline"
            size={20}
            onPress={closePressed}
            color={AppColors.textColor}
            style={{
              alignSelf: "flex-start",
              marginLeft: -5,
            }}
          />
        )}
      </ButtomsheetContentWrapperStyle>

      <>
        <ButtomsheetContentWrapperStyle flex={3}>
          <TextComponent
            title={title}
            fontMed
            fontSize="20px"
            textAlign="center"
          />
        </ButtomsheetContentWrapperStyle>

        <ButtonsheetCloseButtonContainerStyle onPress={closePressed}>
          {!isLegal && (
            <Image source={require("../../../assets/images/cancel.png")} />
          )}
        </ButtonsheetCloseButtonContainerStyle>
      </>
    </ButtomsheetHeaderContainerStyle>
  );
};

interface BottomSheetHeaderProps {
  title: string;
  closePressed?: () => void;
  isLegal?: boolean;
}

const BottomSheetHeader2 = ({
  title,
  closePressed,
  isLegal,
}: BottomSheetHeaderProps) => {
  return (
    <ButtomsheetHeaderContainerStyle>
      {isLegal ? (
        <ButtomsheetContentWrapperStyle>
          <Ionicons
            name="chevron-back-outline"
            size={20}
            onPress={closePressed}
            color={AppColors.textColor}
            style={{
              alignSelf: "flex-start",
              marginLeft: -5,
            }}
          />
        </ButtomsheetContentWrapperStyle>
      ) : (
        <>
          <ButtomsheetContentWrapperStyle flex={3}>
            <TextComponent
              title={title}
              fontMed
              fontSize="20px"
              textAlign="center"
            />
          </ButtomsheetContentWrapperStyle>

          <ButtonsheetCloseButtonContainerStyle onPress={closePressed}>
            <Image source={require("../../../assets/images/cancel.png")} />
          </ButtonsheetCloseButtonContainerStyle>
        </>
      )}
    </ButtomsheetHeaderContainerStyle>
  );
};

export default BottomSheetHeader;
