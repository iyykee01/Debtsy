import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { ButtomSheetPage } from "../../../components/Bottomsheet/Bottomsheet";
import BottomSheetHeader from "../../../components/Bottomsheet/BottomSheetHeader";
import { ProfileComponentNoImage } from "../../../components/Profile/ProfileComponent";
import { Container, ContentWrapper } from "../../../styles/Container";
import { Spacer } from "../../../styles/Spacing";
import BottomsheetPrivacyAndPolicy from "../bottomsheetViews/Privacy_and_Policy/bottomsheetprivacyAndPolicy";
import BottomsheetTermsAndCondition from "../bottomsheetViews/Terms&Conditions/bottomsheetTerms&Condition";

const Legal = ({ navigation }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [index, setIndex] = useState(-1);
  const [BottomsheetComponent, setBottomsheetComponent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const bottomsheetPrivacyAndPolicyHandler = (index: number) => {
    setBottomsheetComponent(
      <BottomsheetPrivacyAndPolicy closePressed={() => closeBottomSheet()} />
    );
    setIndex(index);
    setIsOpen(true);
  };

  const bottomsheetTermsAndCondition = (index: number) => {
    setBottomsheetComponent(
      <BottomsheetTermsAndCondition closePressed={() => closeBottomSheet()} />
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
        <Spacer spaceTop="12%" />
        <ContentWrapper>
          <BottomSheetHeader title="Legal" isLegal closePressed={goBack} />

          <Spacer spaceTop="5%" />
          <ProfileComponentNoImage
            title="Privacy Policy"
            onPress={() => bottomsheetPrivacyAndPolicyHandler(1)}
          />
          <ProfileComponentNoImage
            title="Terms of Service"
            isIndex
            onPress={() => bottomsheetTermsAndCondition(1)}
          />
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

export default Legal;
