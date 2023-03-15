import React, { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BottomSheetHeader from "../../../components/Bottomsheet/BottomSheetHeader";
import { ButtonComponent } from "../../../components/Button/ButtonComponent";
import { TextField } from "../../../components/TextFields/TextField";
import { AppColors } from "../../../helpers/colors";
import { updateUser } from "../../../redux/features/userFeature/userFeature";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { Container, ContentWrapper } from "../../../styles/Container";
import { Spacer } from "../../../styles/Spacing";

const EditProfile = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading.loading);
  const user = useAppSelector((state) => state.user.user);
  const uesrnameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const countryRef = useRef(null);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  const handleLoginHandler = () => {
    navigation.navigate("Login");
  };

  const goBack = () => {
    navigation.goBack();
  };

  const updateUserHandler = () => {
    //Call api to create account and store token in async storage
    const firstname = user?.firstname;
    const lastname = user?.lastname;

    dispatch(
      updateUser({
        firstname,
        lastname,
        username,
        phoneNumber,
        country,
      })
    );
  };

  return (
    <>
      <Container>
        <ContentWrapper>
          <Spacer spaceTop="15%" />
          <BottomSheetHeader
            title="Edit Profile"
            isLegal
            closePressed={goBack}
          />

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
              placeholder={`${user.firstname} ${user.lastname}`}
              isEditable
            />

            <Spacer spaceTop="6%" />

            <TextField
              fieldHeader="Email"
              hasHeader
              placeholder={user.email}
              isEditable
            />

            <Spacer spaceTop="6%" />

            <TextField
              fieldHeader="User name"
              hasHeader
              placeholder="User name"
              innerRef={uesrnameRef}
              onSubmitEditing={() => uesrnameRef.current.focus()}
              onChangeText={(text) => setUsername(text)}
            />

            <Spacer spaceTop="6%" />

            <TextField
              fieldHeader="Phone Number"
              hasHeader
              placeholder="Phone Number"
              innerRef={phoneNumberRef}
              keyboardType="phone-pad"
              onSubmitEditing={() => phoneNumberRef.current.focus()}
              onChangeText={(text) => setPhoneNumber(text)}
            />

            <Spacer spaceTop="6%" />

            <TextField
              fieldHeader="Country"
              hasHeader
              placeholder="Country"
              innerRef={countryRef}
              onSubmitEditing={() => countryRef.current.focus()}
              onChangeText={(text) => setCountry(text)}
            />

            <Spacer spaceTop="10%" />

            <ButtonComponent
              title="Edit Profile"
              onPress={updateUserHandler}
              backgroundColor={AppColors.colorGreen}
              isLoading={loading}
            />
          </KeyboardAwareScrollView>

          <Spacer spaceBottom="7%" />
        </ContentWrapper>
      </Container>
    </>
  );
};

export default EditProfile;
