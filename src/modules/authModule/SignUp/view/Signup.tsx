import React, { useRef, useState } from "react";
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  ButtonComponent,
  FlatButtonComponent,
} from "../../../../components/Button/ButtonComponent";
import { TextComponent } from "../../../../components/Text/TextComponent";
import {
  TextField,
  TextFieldWithRightIcon,
} from "../../../../components/TextFields/TextField";
import { Container, ContentWrapper } from "../../../../styles/Container";
import { Spacer } from "../../../../styles/Spacing";

import { ButtonWrapper } from "./SignupStyle";

const Signup = ({ navigation }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfrimPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Container>
      <ContentWrapper>
        <Spacer spaceTop="30%" />

        <TextComponent title="Create Account" fontSize="24px" fontMed />

        <Spacer spaceTop="14%" />

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
            fieldHeader="Full Name"
            hasHeader
            placeholder="Full Name"
            innerRef={nameRef}
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <Spacer spaceTop="6%" />

          <TextField
            fieldHeader="Email"
            hasHeader
            placeholder="e.g. yourname@gmail.com"
            keyboardType="email-address"
            innerRef={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <Spacer spaceTop="6%" />

          <TextFieldWithRightIcon
            isPassword={!showPassword}
            fieldHeader="Password"
            hasHeader
            innerRef={passwordRef}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            iconName={!showPassword ? "eye-outline" : "eye-off-outline"}
            onPress={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
          />

          <Spacer spaceTop="6%" />

          <TextFieldWithRightIcon
            isPassword={!showConfrimPassword}
            fieldHeader="Confirm Password"
            hasHeader
            innerRef={confirmPasswordRef}
            iconName={!showConfrimPassword ? "eye-outline" : "eye-off-outline"}
            onPress={() => setShowConfirmPassword(!showConfrimPassword)}
            showPassword={showConfrimPassword}
          />

          <Spacer spaceTop="5%" />

          <ButtonComponent title="Create Account" />
        </KeyboardAwareScrollView>

        <ButtonWrapper>
          <FlatButtonComponent
            title1="Already have an account? "
            title2="Login"
            onPress={handleLogin}
          />
        </ButtonWrapper>

        <Spacer spaceBottom="7%" />
      </ContentWrapper>
    </Container>
  );
};

export default Signup;
