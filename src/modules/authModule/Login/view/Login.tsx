import { useRef, useState } from "react";
import {
  ButtonComponent,
  FlatButtonComponent,
} from "../../../../components/Button/ButtonComponent";
import { ModalComponent } from "../../../../components/Modal/ModalComponent";
import { TextComponent } from "../../../../components/Text/TextComponent";
import {
  TextField,
  TextFieldWithRightIcon,
} from "../../../../components/TextFields/TextField";
import { Container, ContentWrapper } from "../../../../styles/Container";
import { Spacer } from "../../../../styles/Spacing";
import { ButtonWrapper, ForgotPasswordStyle } from "./LoginStyle";

const Login = ({ navigation }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleLogin = () => {
    setVisible(true);
    setInterval(() => {
      setVisible(false);
    }, 3000);
  };

  return (
    <>
      <Container>
        <ContentWrapper>
          <Spacer spaceTop="30%" />

          <TextComponent title="Login" fontSize="24px" fontMed />

          <Spacer spaceTop="14%" />

          <TextField
            keyboardType="email-address"
            fieldHeader="Email"
            hasHeader
            innerRef={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <Spacer spaceTop="6%" />

          <TextFieldWithRightIcon
            isPassword={!showPassword}
            fieldHeader="Password"
            hasHeader
            innerRef={passwordRef}
            iconName={!showPassword ? "eye-outline" : "eye-off-outline"}
            onPress={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
          />

          <Spacer spaceTop="5%" />

          <ForgotPasswordStyle onPress={handleForgotPassword}>
            <TextComponent title="Forgot Password?" fontSize="16px" fontReg />
          </ForgotPasswordStyle>

          <Spacer spaceTop="5%" />

          <ButtonComponent title="Login" onPress={handleLogin} />

          <ButtonWrapper>
            <FlatButtonComponent
              title1="Don't have an account? "
              title2="Create Account"
              onPress={handleSignup}
            />
          </ButtonWrapper>

          <Spacer spaceBottom="7%" />
        </ContentWrapper>
      </Container>

      <ModalComponent visible={visible} />
    </>
  );
};

export default Login;
