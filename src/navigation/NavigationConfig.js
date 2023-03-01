// Tab Navigation Config
import { Image } from "react-native";
import { AppColors } from "../helpers/colors";

//Tab Options
export const tabOptions = {
  headerShown: false,
  tabBarActiveTintColor: AppColors.textColor,
  tabBarInactiveTintColor: AppColors.placeholderColor,
  tabBarLabelStyle: { fontSize: 12 },
  //   tabBarItemStyle: { height: 60 },
};

//Screen Options
export const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    if (route.name === "Dashboard" && focused) {
      return (
        <Image
          source={require("../../assets/images/dashboardActive.png")}
          style={{ height: 24, width: 24 }}
        />
      );
    } else if (route.name === "Dashboard" && !focused) {
      return (
        <Image
          source={require("../../assets/images/dashboardInactive.png")}
          style={{ height: 24, width: 24 }}
        />
      );
    } else if (route.name === "Debt" && focused) {
      return (
        <Image
          source={require("../../assets/images/debtActive.png")}
          style={{ height: 24, width: 24 }}
        />
      );
    } else if (route.name === "Debt" && !focused) {
      return (
        <Image
          source={require("../../assets/images/debtInactive.png")}
          style={{ height: 24, width: 24 }}
        />
      );
    } else if (route.name === "Setting" && focused) {
      return (
        <Image
          source={require("../../assets/images/settingActive.png")}
          style={{ height: 24, width: 24 }}
        />
      );
    } else if (route.name === "Setting" && !focused) {
      return (
        <Image
          source={require("../../assets/images/settingInactive.png")}
          style={{ height: 24, width: 24 }}
        />
      );
    }
  },
});
