import { useRef, useState } from "react";
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomSheetHeader from "../../../../components/Bottomsheet/BottomSheetHeader";
import { ButtonComponent } from "../../../../components/Button/ButtonComponent";
import { TextComponent } from "../../../../components/Text/TextComponent";
import {
  TextField,
  TextFieldWithRightIcon,
} from "../../../../components/TextFields/TextField";
import { AppColors } from "../../../../helpers/colors";
import { ContentWrapper } from "../../../../styles/Container";
import { Spacer } from "../../../../styles/Spacing";
import { CheckBox } from "../../debtComponent/debtCardComponent";
import {
  FlexedItemsWrapper,
  RowFlexed,
} from "../../debtDetails/debDetailsStyles";

interface CreateDebtButtonsheetProps {
  closePressed: () => void;
}

export const CreateDebtButtonsheet = ({
  closePressed,
}: CreateDebtButtonsheetProps) => {
  const debtNameRef = useRef(null);
  const amountOwedRef = useRef(null);
  const rPayemtnRef = useRef(null);
  const paymentDateRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ContentWrapper>
      <BottomSheetHeader title="Create Debt" closePressed={closePressed} />
      <Spacer spaceTop="6%" />

      <KeyboardAwareScrollView
        contentContainerStyle={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        showsVerticalScrollIndicator={false}
        enableOnAndroid
        enableAutomaticScroll={Platform.OS === "ios"}
      >
        <TextField
          keyboardType="default"
          fieldHeader="Debt Name"
          hasHeader
          innerRef={debtNameRef}
          onSubmitEditing={() => amountOwedRef.current.focus()}
        />

        <Spacer spaceTop="6%" />

        <TextField
          keyboardType="default"
          fieldHeader="Amount Owed"
          hasHeader
          placeholder="0.0"
          innerRef={amountOwedRef}
          onSubmitEditing={() => rPayemtnRef.current.focus()}
        />

        <Spacer spaceTop="6%" />

        <TextField
          keyboardType="default"
          fieldHeader="Recurring Payment"
          hasHeader
          placeholder="0.0"
          innerRef={rPayemtnRef}
          onSubmitEditing={() => paymentDateRef.current.focus()}
        />

        <Spacer spaceTop="6%" />

        <TextFieldWithRightIcon
          fieldHeader="Payment Date"
          innerRef={paymentDateRef}
          hasHeader
          placeholder="DD/MM/YYYY"
          iconName="chevron-down-outline"
          color={AppColors.placeholderColor}
          size={18}
        />

        <Spacer spaceTop="6%" />

        <RowFlexed>
          <FlexedItemsWrapper flex={0.1} alignItems="flex-start">
            <CheckBox isChecked={isChecked} onPress={handleCheckBox} />
          </FlexedItemsWrapper>
          <FlexedItemsWrapper alignItems="flex-start">
            <TextComponent
              title="Set payment reminder"
              color={AppColors.textColor}
              fontLight
              fontSize="16px"
            />
          </FlexedItemsWrapper>
        </RowFlexed>

        <Spacer spaceTop="7%" />

        <ButtonComponent title="Create Debt" />
      </KeyboardAwareScrollView>
    </ContentWrapper>
  );
};
