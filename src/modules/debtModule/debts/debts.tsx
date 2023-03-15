import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useRef, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { ButtomSheetPage } from "../../../components/Bottomsheet/Bottomsheet";
import { HeaderComponent } from "../../../components/HeaderComponent/HeaderComponent";
import { TextComponent } from "../../../components/Text/TextComponent";
import { AppColors } from "../../../helpers/colors";
import { getAllDebts } from "../../../redux/features/debtFeature/debtFeature";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { Container } from "../../../styles/Container";
import { Spacer } from "../../../styles/Spacing";
import { CreateDebtButtonsheet } from "../debtBottomsheets/createDebtBottomsheet/createDebtBottomsheet";
import { DebtCardComponent } from "../debtComponent/debtCardComponent";
import {
  DebtContentWrapper,
  DebtImageStyle,
  PlusImageWrapperStyle,
} from "./debtStyle";

const DebtsScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const debts = useAppSelector((state) => state.debt.debts);
  const user = useAppSelector((state) => state.user.user);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [index, setIndex] = useState(-1);
  const [BottomsheetComponent, setBottomsheetComponent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openCreateDebtButtonsheet = (index: number) => {
    setBottomsheetComponent(
      <CreateDebtButtonsheet closePressed={() => closeBottomSheet()} />
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

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllDebts({ page: 1, limit: 10 }));
    }, [])
  );

  return (
    <>
      <Container>
        <HeaderComponent header="Debt" isDesc>
          {debts === null ? (
            <DebtContentWrapper>
              <DebtImageStyle
                source={require("../../../../assets/images/piggy.png")}
              />
              <Spacer spaceTop="5%" />

              <TextComponent
                title="No Debt Available"
                fontMed
                fontSize="16px"
              />

              <Spacer spaceTop="1%" />

              <TextComponent
                title="Your debts will display here"
                fontMed
                fontSize="16px"
                fontLight
                color={AppColors.debtTextColor}
              />
            </DebtContentWrapper>
          ) : (
            <>
              <Spacer spaceTop="6%" />
              <FlatList
                data={debts}
                renderItem={({ item, index }) => (
                  <DebtCardComponent
                    key={index}
                    item={item}
                    onPress={() => navigation.navigate("DebtDetail")}
                  />
                )}
              />
            </>
          )}

          <PlusImageWrapperStyle onPress={() => openCreateDebtButtonsheet(1)}>
            <DebtImageStyle
              source={require("../../../../assets/images/plus.png")}
            />
          </PlusImageWrapperStyle>
        </HeaderComponent>
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

export default DebtsScreen;
