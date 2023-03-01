import React, { useCallback, useMemo } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";

interface ButtomSheetPageProps {
  children?: React.ReactNode;
  sheetRef: any;
  onChange?: (index: number) => void;
  index?: number;
  onClose?: () => void;
}

export const ButtomSheetPage = ({
  children,
  sheetRef,
  onChange,
  index,
  onClose,
}: ButtomSheetPageProps) => {
  // variables
  const snapPoints = useMemo(() => ["1%", "90%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        opacity={0.7}
      />
    ),
    []
  );

  return (
    <Portal>
      <BottomSheet
        ref={sheetRef}
        index={index}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onChange={onChange}
        enablePanDownToClose
        onClose={onClose}
      >
        {children}
      </BottomSheet>
    </Portal>
  );
};
