import OTPInputView from "@twotalltotems/react-native-otp-input";
import { StyleSheet, View } from "react-native";
import { AppColors } from "../../../../helpers/colors";
import { ButtonComponent } from "../../../../components/Button/ButtonComponent";
import { TextComponent } from "../../../../components/Text/TextComponent";
import { Container, ContentWrapper } from "../../../../styles/Container";
import { Spacer } from "../../../../styles/Spacing";

import { ButtonWrapper, TextWrapper } from "./ConfirmOTPStyle";

const ConfirmOTP = ({ navigation }) => {
  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
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
            autoFocusOnLoad={true}
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

          <ButtonComponent title="Confirm OTP" />
        </ContentWrapper>
      </Container>
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
