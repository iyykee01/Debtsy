import { useState } from "react";
import { FlatList, Pressable, TextInput } from "react-native";
import BottomSheetHeader from "../../../../components/Bottomsheet/BottomSheetHeader";
import { ButtonComponent } from "../../../../components/Button/ButtonComponent";

import { ProfileListComoponent } from "../../../../components/ProfileListCompontent/ProfileListComoponent";
import { Scroller } from "../../../../components/Scroller/Scroller";
import { TextComponent } from "../../../../components/Text/TextComponent";
import { AppColors } from "../../../../helpers/colors";
import { ContentWrapper } from "../../../../styles/Container";
import { Spacer } from "../../../../styles/Spacing";
import { TextInputTxnDetailsStyle } from "./transactionDetailsBottomsheetStyle";

const data = [
  {
    title: "Status",
    value: "Status",
  },
  {
    title: "Transaction date",
    value: "Fri, Oct 1 2022",
  },
  {
    title: "Debt name",
    value: "Student loan",
  },
  {
    title: "Unpaid Amount",
    value: "26,000",
  },
  {
    title: "Total",
    value: "$30,000",
  },
];

interface DebtTxsDetailsButtonsheetProps {
  closePressed: () => void;
}

export const DebtTxsDetailsButtonsheet = ({
  closePressed,
}: DebtTxsDetailsButtonsheetProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    setIsEdit(false);
  };

  return (
    <ContentWrapper>
      <BottomSheetHeader
        title="Transaction Details"
        closePressed={closePressed}
      />
      <Spacer spaceTop="6%" />

      <TextComponent
        title="How much did you pay?"
        fontSize="16px"
        fontLight
        textAlign="center"
      />

      <Spacer spaceTop="4%" />

      <TextInputTxnDetailsStyle
        isEdit={isEdit}
        placeholderTextColor={AppColors.textColor}
        placeholder="$120"
        editable={isEdit}
        keybordeType="number-pad"
        autoFocus={!isEdit ? true : false}
      />

      <Pressable
        onPress={isEdit ? handleSave : handleEdit}
        style={{ position: "absolute", right: -5, top: "15%", margin: 10 }}
      >
        <TextComponent
          title={isEdit ? "Save" : "Edit"}
          fontReg
          fontSize="14px"
          textAlign="center"
          color={AppColors.colorGreen}
        />
      </Pressable>

      <Scroller>
        <Spacer spaceTop="2%" />

        <Spacer spaceTop="7%" />

        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({ item, index }) => (
            <ProfileListComoponent item={item} key={index} index={index} />
          )}
        />

        <Spacer spaceTop="10%" />

        <ButtonComponent title="I made this payment" />

        <Spacer spaceTop="3%" />

        <ButtonComponent
          title="I missed this payment"
          backgroundColor="transparent"
          color={AppColors.textColor}
        />

        <Spacer spaceTop="10%" />
      </Scroller>
    </ContentWrapper>
  );
};
