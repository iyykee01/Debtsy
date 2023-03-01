import OTPInputView from "@twotalltotems/react-native-otp-input";
import { StyleSheet } from "react-native";
import { AppColors } from "../../helpers/colors";
import { Container, ContentWrapper } from "../../styles/Container";
import { Spacer } from "../../styles/Spacing";
import { TextComponent } from "../Text/TextComponent";

interface HeaderComponentProps {
  header: string;
  children?: React.ReactNode;
  isDesc?: boolean;
}

export const HeaderComponent = ({
  header,
  children,
  isDesc,
}: HeaderComponentProps) => {
  return (
    <>
      <Container style={{ backgroundColor: AppColors.colorWhite }}>
        <ContentWrapper>
          <Spacer spaceTop="30%" />

          <TextComponent title={header} fontSize="24px" fontMed />
          {isDesc ? <Spacer spaceTop="2%" /> : <Spacer spaceTop="14%" />}

          {children}
        </ContentWrapper>
      </Container>
    </>
  );
};
