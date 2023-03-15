import { useContext, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

import { NavContext } from "../../../../App";
import {
  ButtonComponent,
  FlatButtonComponent,
} from "../../../components/Button/ButtonComponent";
import { ModalComponent } from "../../../components/Modal/ModalComponent";
import { TextComponent } from "../../../components/Text/TextComponent";
import {
  TextField,
  TextFieldWithRightIcon,
} from "../../../components/TextFields/TextField";
import { AppColors } from "../../../helpers/colors";
import { Container, ContentWrapper } from "../../../styles/Container";
import { Spacer } from "../../../styles/Spacing";
import { ButtonWrapper, ForgotPasswordStyle } from "./LoginStyle";
import { loginUser } from "../../../redux/features/authFeature/authFeature";

const Login = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading.loading);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState("Yustimisu@gmail.com");
  const [password, setPassword] = useState("Testing1234");
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { login } = useContext(NavContext);

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleLogin = () => {
    //Call api to log user in and store token in async storage
    dispatch(loginUser({ email, password, login }));
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailRef, password]);

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
            onChangeText={(text) => setEmail(text.toLowerCase())}
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
            onChangeText={(text) => setPassword(text)}
          />

          <Spacer spaceTop="5%" />

          <ForgotPasswordStyle onPress={handleForgotPassword}>
            <TextComponent title="Forgot Password?" fontSize="16px" fontReg />
          </ForgotPasswordStyle>

          <Spacer spaceTop="5%" />

          <ButtonComponent
            title="Login"
            onPress={handleLogin}
            disabled={disabled}
            backgroundColor={
              disabled ? AppColors.placeholderColor : AppColors.colorGreen
            }
            isLoading={loading}
          />

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

      <ModalComponent visible={loading} />
    </>
  );
};

export default Login;
