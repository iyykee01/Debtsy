import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { AppColors } from "../../helpers/colors";

interface StatusBarViewProps {
  statusColor?: string;
  children: React.ReactNode;
}

export const StatusBarView = ({
  statusColor,
  children,
}: StatusBarViewProps) => {
  return (
    <SafeAreaView
      style={[
        styles.viewContainer,
        {
          backgroundColor: statusColor || AppColors.backgroundColor,
        },
      ]}
    >
      {/* <SafeAreaView /> */}
      <StatusBar
        backgroundColor={statusColor || AppColors.colorWhite}
        barStyle={statusColor ? "light-content" : "dark-content"}
      />
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    // backgroundColor: AppColor.colorOnboardingBackground,
  },
});
