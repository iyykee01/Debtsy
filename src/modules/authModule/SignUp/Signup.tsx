import React, { useContext, useEffect, useRef, useState } from "react";
import { Alert, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
import { registerUser } from "../../../redux/features/authFeature/authFeautures";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { Container, ContentWrapper } from "../../../styles/Container";
import { Spacer } from "../../../styles/Spacing";

import { ButtonWrapper } from "./SignupStyle";

const Signup = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading.loading);
  const erorr = useAppSelector((state) => state.loading.error);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfrimPassword, setShowConfirmPassword] = useState(false);
  const { login } = useContext(NavContext);

  const handleLoginHandler = () => {
    navigation.navigate("Login");
  };

  const createAccountHandler = async () => {
    //Call api to create account and store token in async storage

    const firstname = name.split(" ")[0];
    const lastname = name.split(" ")[1] || "";

    try {
      await dispatch(
        registerUser({
          firstname,
          lastname,
          email,
          password,
          passwordConfirm,
        })
      );
      login();
    } catch (error) {
      Alert.alert("Opps!", erorr);
    }
  };

  useEffect(() => {
    if (
      email !== "" &&
      password !== "" &&
      name !== "" &&
      passwordConfirm === password
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailRef, password, name, passwordConfirm]);

  return (
    <>
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
              onChangeText={(text) => setName(text)}
            />

            <Spacer spaceTop="6%" />

            <TextField
              fieldHeader="Email"
              hasHeader
              placeholder="e.g. yourname@gmail.com"
              keyboardType="email-address"
              innerRef={emailRef}
              onSubmitEditing={() => passwordRef.current.focus()}
              onChangeText={(text) => setEmail(text)}
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
              onChangeText={(text) => setPassword(text)}
            />

            <Spacer spaceTop="6%" />

            <TextFieldWithRightIcon
              isPassword={!showConfrimPassword}
              fieldHeader="Confirm Password"
              hasHeader
              iconName={
                !showConfrimPassword ? "eye-outline" : "eye-off-outline"
              }
              onPress={() => setShowConfirmPassword(!showConfrimPassword)}
              showPassword={showConfrimPassword}
              onChangeText={(text) => setPasswordConfirm(text)}
            />

            <Spacer spaceTop="5%" />

            <ButtonComponent
              title="Create Account"
              onPress={createAccountHandler}
              disabled={disabled}
              backgroundColor={
                disabled ? AppColors.placeholderColor : AppColors.colorGreen
              }
              isLoading={loading}
            />
          </KeyboardAwareScrollView>

          <ButtonWrapper>
            <FlatButtonComponent
              title1="Already have an account? "
              title2="Login"
              onPress={handleLoginHandler}
            />
          </ButtonWrapper>

          <Spacer spaceBottom="7%" />
        </ContentWrapper>
      </Container>

      <ModalComponent visible={loading} />
    </>
  );
};

export default Signup;
