import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useRef, useState } from "react";
import { ButtomSheetPage } from "../../../components/Bottomsheet/Bottomsheet";
import { HeaderComponent } from "../../../components/HeaderComponent/HeaderComponent";
import { ProfileComponent } from "../../../components/Profile/ProfileComponent";
import { deleteData } from "../../../helpers/methods";
import { BottomsheeAbout } from "../bottomsheetViews/About/bottomsheetAbout";
import { BottomsheetHelp } from "../bottomsheetViews/Help/bottomsheetHelp";
import { BottomsheetProfile } from "../bottomsheetViews/Profile/bottomsheetProfile";

const SettingsScreen = ({ navigation }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [BottomsheetComponent, setBottomsheetComponent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const bottomsheetProfileHandler = (index: number) => {
    setBottomsheetComponent(
      <BottomsheetProfile
        closePressed={() => closeBottomSheet()}
        closeNavigate={() => {
          navigation.navigate("editProfile");
          closeBottomSheet();
        }}
      />
    );
    setIndex(index);
    setIsOpen(true);
  };

  const bottomsheetHelpHandler = (index: number) => {
    setBottomsheetComponent(
      <BottomsheetHelp closePressed={() => closeBottomSheet()} />
    );
    setIndex(index);
    setIsOpen(true);
  };

  const bottomsheetAboutHandler = (index: number) => {
    setBottomsheetComponent(
      <BottomsheeAbout closePressed={() => closeBottomSheet()} />
    );
    setIndex(index);
    setIsOpen(true);
  };

  const legalHandler = () => {
    navigation.navigate("Legal");
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

  const logoutUser = async () => {
    try {
      const value = await deleteData("isLogin");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <HeaderComponent header="Settings">
        <ProfileComponent
          onPress={() => bottomsheetProfileHandler(1)}
          title="Profile"
          imgSrc={require("../../../../assets/images/verified-user.png")}
        />
        <ProfileComponent
          onPress={() => bottomsheetHelpHandler(1)}
          title="Help"
          imgSrc={require("../../../../assets/images/chat-bubble-question.png")}
        />
        <ProfileComponent
          onPress={() => bottomsheetAboutHandler(1)}
          title="About"
          imgSrc={require("../../../../assets/images/info-empty.png")}
        />
        <ProfileComponent
          onPress={legalHandler}
          title="Legal"
          imgSrc={require("../../../../assets/images/page.png")}
        />
        <ProfileComponent
          isIndex
          title="Logout"
          imgSrc={require("../../../../assets/images/log-out.png")}
          onPress={logoutUser}
        />
      </HeaderComponent>

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

export default SettingsScreen;
