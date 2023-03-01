import React from "react";
import { View } from "react-native";
import { DebtHistoryComponent } from "../debtDetailComponent/debtHistoryComponent";

export const UpcomingPayment = () => {
  return (
    <>
      <DebtHistoryComponent
        amount="Unpaid - $36,50"
        date="Oct 1, 2022"
        amount2="$120"
        imgSrc={require("../../../../../assets/images/paidDebt.png")}
      />

      <DebtHistoryComponent
        date="Oct 1, 2022"
        amount="Unpaid - $36,50"
        amount2="$120"
        imgSrc={require("../../../../../assets/images/paidDebt.png")}
      />

      <DebtHistoryComponent
        isIndex
        amount="Unpaid - $36,50"
        date="Oct 1, 2022"
        amount2="$120"
        imgSrc={require("../../../../../assets/images/paidDebt.png")}
      />
    </>
  );
};
