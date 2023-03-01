import { Image, View } from "react-native";
import { TextComponent } from "../../../../components/Text/TextComponent";
import { Spacer } from "../../../../styles/Spacing";
import {
  FlexedItemsWrapper,
  PaymentHistoryWrapper,
  RowFlexed,
} from "../debDetailsStyles";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "../../../../helpers/colors";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { useCallback, useRef, useState } from "react";
import { DebtTxsDetailsButtonsheet } from "../../debtBottomsheets/transactionDetailsBottomSheet/transactionDetailsBottomsheet";
import { ButtomSheetPage } from "../../../../components/Bottomsheet/Bottomsheet";

interface CardComponentProps {
  date: string;
  imgSrc: any;
  amount: string;
  isIndex?: boolean;
  amount2?: string;
  onPress?: () => void;
}

export const DebtHistoryComponent = ({
  date,
  amount,
  imgSrc,
  isIndex,
  amount2,
  onPress,
}: CardComponentProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [index, setIndex] = useState(-1);
  const [BottomsheetComponent, setBottomsheetComponent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [debts] = useState([]);

  const openTxnDebtButtonsheet = (index: number) => {
    setBottomsheetComponent(
      <DebtTxsDetailsButtonsheet closePressed={() => closeBottomSheet()} />
    );
    setIndex(index);
    setIsOpen(true);
  };

  // callbacks
  const handleSheetChanges = useCallback(() => {
    bottomSheetRef.current.snapToIndex(index);
  }, []);

  //this will close the all bottomsheet
  const closeBottomSheet = () => {
    setIsOpen(false);
    setIndex(-1);
  };

  return (
    <>
      <PaymentHistoryWrapper
        isIndex={isIndex}
        onPress={() => openTxnDebtButtonsheet(1)}
      >
        <RowFlexed borderRadius="8px">
          <FlexedItemsWrapper flex={0.5} alignItems="flex-start">
            <Image source={imgSrc} style={{ width: 40, height: 40 }} />
          </FlexedItemsWrapper>

          <FlexedItemsWrapper alignItems="flex-start" flex={1.9}>
            <TextComponent title={date} fontSize="14px" fontLight />
            <Spacer spaceTop="3%" />
            <TextComponent
              title={amount}
              fontSize="14px"
              fontLight
              color={AppColors.placeholderColor}
            />
          </FlexedItemsWrapper>

          <FlexedItemsWrapper alignItems="flex-end">
            <TextComponent title={amount2} fontSize="16px" fontMed />
          </FlexedItemsWrapper>

          <FlexedItemsWrapper alignItems="flex-end" flex={0.25}>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color={AppColors.placeholderColor}
            />
          </FlexedItemsWrapper>
        </RowFlexed>
      </PaymentHistoryWrapper>

      {isOpen && (
        <ButtomSheetPage
          sheetRef={bottomSheetRef}
          index={index}
          onChange={handleSheetChanges}
          onClose={() => setIndex(-1)}
        >
          {BottomsheetComponent}
        </ButtomSheetPage>
      )}
    </>
  );
};
