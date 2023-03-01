import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Legal from "../modules/settingModule/Legal/legal";
import SettingsScreen from "../modules/settingModule/setting/settings";

const Stack = createNativeStackNavigator();

const SettingsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingHome"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Legal"
        component={Legal}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
