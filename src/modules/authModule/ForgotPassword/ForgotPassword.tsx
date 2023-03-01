import { useEffect, useState } from "react";
import { ButtonComponent } from "../../../components/Button/ButtonComponent";
import { TextComponent } from "../../../components/Text/TextComponent";
import { TextField } from "../../../components/TextFields/TextField";
import { Container, ContentWrapper } from "../../../styles/Container";
import { Spacer } from "../../../styles/Spacing";

const ForgotPassword = ({ navigation }) => {
  const forgotPasswordHandler = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <ContentWrapper>
        <Spacer spaceTop="30%" />

        <TextComponent title="Forgot Password" fontSize="24px" fontMed />

        <Spacer spaceTop="14%" />

        <TextField keyboardType="email-address" fieldHeader="Email" hasHeader />

        <Spacer spaceTop="5%" />

        <ButtonComponent
          title="Send Password Reset Link"
          onPress={forgotPasswordHandler}
        />
      </ContentWrapper>
    </Container>
  );
};

export default ForgotPassword;
