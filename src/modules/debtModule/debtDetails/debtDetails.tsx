import React from "react";
import { Image } from "react-native";
import BottomSheetHeader from "../../../components/Bottomsheet/BottomSheetHeader";
import { TextComponent } from "../../../components/Text/TextComponent";
import { AppColors } from "../../../helpers/colors";
import { Container, ContentWrapper } from "../../../styles/Container";
import { Spacer } from "../../../styles/Spacing";
import {
  DebtSummaryWrapper,
  FlexedItemsWrapper,
  PaymentWrapper,
  RowFlexed,
} from "./debDetailsStyles";
import { CardComponent } from "./debtDetailComponent/cardComponent";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { PaidDebtHistory } from "./paidDebtHistory/paidDebtHistory";
import { UpcomingPayment } from "./upcomingPaymentHistory/upcomingPayment";

const Tab = createMaterialTopTabNavigator();

const DebtDetails = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Spacer spaceTop="12%" />
      <ContentWrapper>
        <BottomSheetHeader title="Student Loan" isLegal closePressed={goBack} />
        <Spacer spaceTop="12%" />

        <DebtSummaryWrapper>
          <RowFlexed>
            <FlexedItemsWrapper>
              <TextComponent title="Debt Summary" fontSize="16px" fontReg />
            </FlexedItemsWrapper>

            <FlexedItemsWrapper flex={0.2}>
              <Image
                source={require("../../../../assets/images/edit.png")}
                style={{ width: 17.68, height: 17.68 }}
              />
            </FlexedItemsWrapper>
          </RowFlexed>
        </DebtSummaryWrapper>

        <Spacer spaceTop="-5%" />
        <PaymentWrapper>
          <RowFlexed>
            <FlexedItemsWrapper>
              <TextComponent
                title="Total"
                fontSize="14px"
                fontLight
                color={AppColors.placeholderColor}
              />
              <Spacer spaceTop="5%" />
              <TextComponent title="$4,000" fontSize="16px" fontReg />
            </FlexedItemsWrapper>

            <FlexedItemsWrapper>
              <TextComponent
                title="Paid"
                fontSize="14px"
                fontLight
                color={AppColors.placeholderColor}
              />
              <Spacer spaceTop="5%" />
              <TextComponent title="$26,000" fontSize="16px" fontReg />
            </FlexedItemsWrapper>

            <FlexedItemsWrapper>
              <TextComponent
                title="Unpaid"
                fontSize="14px"
                fontLight
                color={AppColors.placeholderColor}
              />
              <Spacer spaceTop="5%" />
              <TextComponent title="$26,000" fontSize="16px" fontReg />
            </FlexedItemsWrapper>
          </RowFlexed>
        </PaymentWrapper>

        <Spacer spaceTop="-3%" />
        <CardComponent
          title="Next Payment"
          imgSrc={require("../../../../assets/images/calenderGreen.png")}
          date="Oct 28th, 2022"
          color={AppColors.colorFadedGreen}
        />

        <Spacer spaceTop="4%" />

        <CardComponent
          title="Debt End Date"
          imgSrc={require("../../../../assets/images/calenderBlue.png")}
          date="Jul 28th, 2028"
          color={AppColors.colorFadedBlue}
        />

        <Spacer spaceTop="8%" />

        <Tab.Navigator
          //   tabBar={(props) => <TabBar {...props} />}
          sceneContainerStyle={{ backgroundColor: AppColors.colorWhite }}
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 14,
              textTransform: "capitalize",
            },
            tabBarItemStyle: {
              borderBottomWidth: 2,
              borderBottomColor: "transparent",
            },
            tabBarIndicatorStyle: {
              backgroundColor: AppColors.colorGreen,
              height: 1,
            },
          }}
        >
          <Tab.Screen name="Paid" component={PaidDebtHistory} />
          <Tab.Screen name="Upcoming payments" component={UpcomingPayment} />
        </Tab.Navigator>
      </ContentWrapper>
    </Container>
  );
};

export default DebtDetails;
