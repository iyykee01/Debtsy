import React from "react";
import BottomSheetHeader from "../../../../components/Bottomsheet/BottomSheetHeader";
import { TextComponent } from "../../../../components/Text/TextComponent";
import { AppColors } from "../../../../helpers/colors";
import { ContentWrapper } from "../../../../styles/Container";
import { Spacer } from "../../../../styles/Spacing";

interface BottomsheetPrivacyAndPolicyProps {
  closePressed: () => void;
}

const BottomsheetPrivacyAndPolicy = ({
  closePressed,
}: BottomsheetPrivacyAndPolicyProps) => {
  return (
    <ContentWrapper>
      <BottomSheetHeader title="Privacy Policy" closePressed={closePressed} />
      <Spacer spaceTop="6%" />

      <TextComponent title="A Privacy Policy" fontSize="18px" fontReg />
      <Spacer spaceTop="8%" />
      <TextComponent
        color={AppColors.textColorFaint}
        fontLight
        title="A Privacy Policy 
          
For Increased Transparency
Companies whose business models revolve around handling sensitive customer information find it incredibly important to establish trust with their users. A clear and comprehensive Privacy Policy agreement that tells users exactly what information the company collects and what it does with that information inspires confidence in a business. It gives users a sense of security knowing how much control they have over their personal data under the conditions they sign up for.

Your Privacy Policy agreement should inform your users about how your website or app handles their personal information. Your users must be also be informed about the reason for the collection of information, as well as how long their data will be stored on your servers.

Even if you don't collect personal information, you should disclose this fact in a Privacy Policy. It helps with transparency because users expect to see a Privacy Policy. If you don't have one at all, users may assume you're collecting a lot of personal information and not disclosing it rather than not collecting any."
        fontSize="14px"
        fontReg
      />
    </ContentWrapper>
  );
};

export default BottomsheetPrivacyAndPolicy;
