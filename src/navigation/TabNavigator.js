import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../modules/dashBoardModule/dashboard";
import SettingsNavigation from "./SettingsNavigation";
import DebtNavigation from "./DebtNavigation";
import { screenOptions, tabOptions } from "./NavigationConfig";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={tabOptions}
      />

      <Tab.Screen name="Debt" component={DebtNavigation} options={tabOptions} />

      <Tab.Screen
        name="Setting"
        component={SettingsNavigation}
        options={tabOptions}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
