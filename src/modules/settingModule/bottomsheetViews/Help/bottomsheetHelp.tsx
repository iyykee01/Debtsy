import React from "react";
import BottomSheetHeader from "../../../../components/Bottomsheet/BottomSheetHeader";
import { TextComponent } from "../../../../components/Text/TextComponent";
import { ContentWrapper } from "../../../../styles/Container";
import { Spacer } from "../../../../styles/Spacing";
import { BottomSheetContentWrapper } from "./bottomsheetHelpStyle";

interface BottomsheetHelpProps {
  closePressed: () => void;
}

export const BottomsheetHelp = ({ closePressed }: BottomsheetHelpProps) => {
  return (
    <>
      <ContentWrapper>
        <BottomSheetHeader title="Help" closePressed={closePressed} />
        <Spacer spaceTop="6%" />
        <BottomSheetContentWrapper>
          <TextComponent
            title="Contact Support at "
            fontSize="16px"
            fontLight
          />

          <TextComponent
            title="hello@debtsy.io"
            fontSize="16px"
            fontLight
            underline="underline"
          />
        </BottomSheetContentWrapper>

        {/* <ProfileComponentNoImage isIndex title="Contact Support " /> */}
      </ContentWrapper>
    </>
  );
};
