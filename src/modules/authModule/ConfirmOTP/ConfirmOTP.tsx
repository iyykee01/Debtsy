import OTPInputView from "@twotalltotems/react-native-otp-input";
import { StyleSheet, View } from "react-native";
import { AppColors } from "../../../helpers/colors";
import { ButtonComponent } from "../../../components/Button/ButtonComponent";
import { TextComponent } from "../../../components/Text/TextComponent";
import { Container, ContentWrapper } from "../../../styles/Container";
import { Spacer } from "../../../styles/Spacing";

import { ButtonWrapper, TextWrapper } from "./ConfirmOTPStyle";
import { useContext, useState } from "react";
import { NavContext } from "../../../../App";
import { ModalComponent } from "../../../components/Modal/ModalComponent";
import { storeData } from "../../../helpers/methods";

const ConfirmOTP = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const { login } = useContext(NavContext);
  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleLogin = async () => {
    // setVisible(true);
    // await storeData("isLogin", "true");
    // setInterval(() => {
    //   setVisible(false);
    //   login();
    // }, 3000);
  };

  return (
    <>
      <Container>
        <ContentWrapper>
          <Spacer spaceTop="30%" />

          <TextComponent title="Confirm OTP" fontSize="24px" fontMed />
          <Spacer spaceTop="2%" />

          <TextWrapper>
            <TextComponent
              title="Please enter the code sent to stellaxxx@gmail.com"
              fontSize="15px"
              fontLight
              color={AppColors.textColorFaint}
            />
          </TextWrapper>

          <Spacer spaceTop="20%" />
          {/* For the Otp text Input */}

          <OTPInputView
            style={{
              height: 45,
            }}
            selectionColor="transparent"
            pinCount={6}
            secureTextEntry={true}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.borderStyleBase}
            // onCodeFilled={value => setPin(value)}
            // onCodeChanged={value => validateForm(value)}
          />

          <Spacer spaceTop="5%" />

          <ButtonWrapper>
            <TextComponent
              title="Didn’t receive a code? "
              fontSize="15px"
              fontReg
            />
            <TextComponent
              title="Resend"
              fontSize="15px"
              fontMed
              color={AppColors.colorGreen}
              onPress={handleForgotPassword}
            />
          </ButtonWrapper>

          <Spacer spaceTop="5%" />

          <ButtonComponent title="Confirm OTP" onPress={handleLogin} />
        </ContentWrapper>
      </Container>

      <ModalComponent visible={visible} />
    </>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    borderColor: "transparent",
    backgroundColor: AppColors.lightGray,
    borderRadius: 5,
    color: AppColors.textColor,
    fontSize: 20,
  },
});

export default ConfirmOTP;
