import { useFonts } from "expo-font";
import React from "react";
import {
  ButtonComponent,
  FlatButtonComponent,
} from "../../components/Button/ButtonComponent";
import { TextComponent } from "../../components/Text/TextComponent";
import { TextField } from "../../components/TextFields/TextField";
import { Container } from "../../styles/Container";
import { Spacer } from "../../styles/Spacing";
import { ButtonWrapper, WrapperStyle } from "./SignupStyle";

const Signup = () => {
  const [loadedFont] = useFonts({
    InterRegular: require("../../../assets/fonts/Inter-Regular.ttf"),
    InterLight: require("../../../assets/fonts/Inter-Light.ttf"),
  });

  if (!loadedFont) return null;

  return (
    <Container>
      <WrapperStyle>
        <Spacer spaceTop="30" />
        <TextComponent
          title="Create Account"
          fontSize="24"
          fontFamily="InterRegular"
        />

        <Spacer spaceTop="14" />

        <TextField fieldHeader="Full Name" hasHeader placeholder="Full Name" />

        <Spacer spaceTop="6" />

        <TextField
          fieldHeader="Email"
          hasHeader
          placeholder="e.g. yourname@gmail.com"
        />

        <Spacer spaceTop="6" />

        <TextField fieldHeader="Password" hasHeader placeholder="" />

        <Spacer spaceTop="6" />

        <TextField fieldHeader="Confirm Password" hasHeader placeholder="" />

        <Spacer spaceTop="5" />

        <ButtonComponent title="Create Account" />

        <ButtonWrapper>
          <FlatButtonComponent
            title1="Already have an account? "
            title2="Login"
          />
        </ButtonWrapper>
        <Spacer spaceBottom="10" />
      </WrapperStyle>
    </Container>
  );
};

export default Signup;
