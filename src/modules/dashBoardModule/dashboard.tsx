import { FlatList, Image, Pressable, View } from "react-native";
import { TextComponent } from "../../components/Text/TextComponent";
import { AppColors } from "../../helpers/colors";
import { Container, ContentWrapper } from "../../styles/Container";
import { Spacer } from "../../styles/Spacing";
import { CardComponent } from "../debtModule/debtDetails/debtDetailComponent/cardComponent";
import {
  ChartWrapper,
  DashBoardCardWrapper,
  DotsWrapper,
} from "./dashboardStyle";
import {
  FlexedItemsWrapper,
  PaymentHistoryWrapper,
  RowFlexed,
} from "../debtModule/debtDetails/debDetailsStyles";
import { Scroller } from "../../components/Scroller/Scroller";
import { AvatarImage2 } from "../settingModule/bottomsheetViews/Profile/bottomsheetProfileStyle";
import {
  DebtImageStyle,
  PlusImageWrapperStyle,
} from "../debtModule/debts/debtStyle";
import { useCallback, useRef, useState } from "react";
import { CreateDebtButtonsheet } from "../debtModule/debtBottomsheets/createDebtBottomsheet/createDebtBottomsheet";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { ButtomSheetPage } from "../../components/Bottomsheet/Bottomsheet";
import { DebtTxsDetailsButtonsheet } from "../debtModule/debtBottomsheets/transactionDetailsBottomSheet/transactionDetailsBottomsheet";
import { PieComponent } from "../../components/PieComponent/PieComponent";

const DebtHistorySection = ({ onPress }) => (
  <PaymentHistoryWrapper onPress={onPress}>
    <RowFlexed borderRadius="8px">
      <FlexedItemsWrapper flex={0.32} alignItems="flex-start">
        <Image
          source={require("../../../assets/images/paidDebt.png")}
          style={{ width: 40, height: 40 }}
        />
      </FlexedItemsWrapper>

      <FlexedItemsWrapper alignItems="flex-start" flex={1}>
        <TextComponent title="Student Loan" fontSize="14px" fontLight />
        <Spacer spaceTop="2%" />
        <TextComponent
          title="Paid - $4,000"
          fontSize="14px"
          fontLight
          color={AppColors.placeholderColor}
        />
      </FlexedItemsWrapper>

      <FlexedItemsWrapper alignItems="flex-end">
        <TextComponent title="$75,000" fontSize="16px" fontMed />
        <Spacer spaceTop="2%" />
        <TextComponent
          title="Outstanding $26,000"
          fontSize="14px"
          fontLight
          color={AppColors.placeholderColor}
        />
      </FlexedItemsWrapper>
    </RowFlexed>
  </PaymentHistoryWrapper>
);

const DashboardScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [index, setIndex] = useState(-1);
  const [BottomsheetComponent, setBottomsheetComponent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [debts] = useState([]);

  //This opens the bottom sheet for creating debt
  const openCreateDebtButtonsheet = (index: number) => {
    setBottomsheetComponent(
      <CreateDebtButtonsheet closePressed={() => closeBottomSheet()} />
    );
    setIndex(index);
    setIsOpen(true);
  };

  //This opens the bottom sheet for transaction details
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
      <Container>
        <ContentWrapper>
          <Spacer spaceTop="30%" />

          <RowFlexed borderRadius="8px">
            <FlexedItemsWrapper flex={1} alignItems="flex-start">
              <TextComponent title="Hello, Stella" fontSize="24px" fontMed />
            </FlexedItemsWrapper>

            <FlexedItemsWrapper flex={1} alignItems="flex-end">
              <AvatarImage2
                source={require("../../../assets/images/test.jpeg")}
              />
            </FlexedItemsWrapper>
          </RowFlexed>

          <Spacer spaceTop="7%" />

          <CardComponent
            title="Countdown to dept-free"
            date="June 7th, 2028"
            color="#FFE3AB10"
            imgSrc={require("../../../assets/images/calenderYellow.png")}
            borderColor="#FFE3AB"
            borderWidth="1px"
          />

          <Scroller>
            <Spacer spaceTop="5%" />
            <DashBoardCardWrapper>
              <TextComponent title="Payment Chart" fontSize="14px" fontReg />
              <Spacer spaceTop="-8%" />

              {/* Chart sections  */}
              <ChartWrapper>
                <PieComponent />
                <Spacer spaceTop="-10%" />

                <RowFlexed>
                  <FlexedItemsWrapper flex={0.12} alignItems="flex-start">
                    <DotsWrapper color={AppColors.pieColorTotal} />
                  </FlexedItemsWrapper>

                  <FlexedItemsWrapper alignItems="flex-start" flex={1}>
                    <TextComponent
                      title="Total - 30%"
                      fontSize="14px"
                      fontLight
                      color={AppColors.placeholderColor}
                    />
                  </FlexedItemsWrapper>

                  <FlexedItemsWrapper alignItems="flex-end">
                    <TextComponent title="$75,000" fontSize="14px" fontMed />
                  </FlexedItemsWrapper>
                </RowFlexed>

                <Spacer spaceTop="4%" />
                {/* Paid Section */}
                <RowFlexed>
                  <FlexedItemsWrapper flex={0.12} alignItems="flex-start">
                    <DotsWrapper color={AppColors.pieColorPaid} />
                  </FlexedItemsWrapper>

                  <FlexedItemsWrapper alignItems="flex-start" flex={1}>
                    <TextComponent
                      title="Paid - 20%"
                      fontSize="14px"
                      fontLight
                      color={AppColors.placeholderColor}
                    />
                  </FlexedItemsWrapper>

                  <FlexedItemsWrapper alignItems="flex-end">
                    <TextComponent title="$30,000" fontSize="14px" fontMed />
                  </FlexedItemsWrapper>
                </RowFlexed>

                <Spacer spaceTop="4%" />
                {/* Unpaid Section */}
                <RowFlexed>
                  <FlexedItemsWrapper flex={0.12} alignItems="flex-start">
                    <DotsWrapper color={AppColors.pieColorUnPaid} />
                  </FlexedItemsWrapper>

                  <FlexedItemsWrapper alignItems="flex-start" flex={1}>
                    <TextComponent
                      title="Unpaid - 38%"
                      fontSize="14px"
                      fontLight
                      color={AppColors.placeholderColor}
                    />
                  </FlexedItemsWrapper>

                  <FlexedItemsWrapper alignItems="flex-end">
                    <TextComponent title="$45,000" fontSize="14px" fontLight />
                  </FlexedItemsWrapper>
                </RowFlexed>
              </ChartWrapper>
            </DashBoardCardWrapper>

            <Spacer spaceTop="8%" />

            <RowFlexed borderRadius="8px">
              <FlexedItemsWrapper flex={1} alignItems="flex-start">
                <TextComponent title="Recently Added" fontSize="14px" fontReg />
              </FlexedItemsWrapper>

              <FlexedItemsWrapper flex={1} alignItems="flex-end">
                <Pressable onPress={() => alert("Go to view all pages")}>
                  <TextComponent
                    title="View all"
                    fontSize="14px"
                    fontReg
                    color="#51B26B"
                  />
                </Pressable>
              </FlexedItemsWrapper>
            </RowFlexed>

            <Spacer spaceTop="2%" />
            <FlatList
              showsVerticalScrollIndicator={false}
              data={[1, 2, 3, 4]}
              scrollEnabled={false}
              renderItem={({ item, index }) => (
                <DebtHistorySection onPress={() => openTxnDebtButtonsheet(1)} />
              )}
            />
            {/* <Spacer spaceBottom="5%" /> */}
          </Scroller>

          <PlusImageWrapperStyle onPress={() => openCreateDebtButtonsheet(1)}>
            <DebtImageStyle
              source={require("../../../assets/images/plus.png")}
            />
          </PlusImageWrapperStyle>
        </ContentWrapper>
      </Container>

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

export default DashboardScreen;
