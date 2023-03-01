import styled from "styled-components";
import { AppColors } from "../../../helpers/colors";

export const RowFlexed = styled.View`
  display: flex;
  flex-direction: row;
  padding: ${(props) => props.padding || "0px"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border-radius: ${(props) => props.borderRadius || "0px"};
  border-width: ${(props) => props.borderWidth || "0px"};
  border-color: ${(props) => props.borderColor || "transparent"};
`;

export const FlexedItemsWrapper = styled.View`
  flex: ${(props) => props.flex || 1};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
`;

export const DebtSummaryWrapper = styled.View`
  align-self: center;
  width: 41%;
  margin-left: 10px;
`;

export const PaymentWrapper = styled.View`
  padding: 40px;
`;

export const PaymentHistoryWrapper = styled.TouchableOpacity`
  padding-vertical: 14px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) =>
    props.isIndex ? "transparent" : AppColors.lightGray};
`;
