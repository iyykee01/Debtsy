import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "../modules/settingModule/EditProfile/editProfile";
import Legal from "../modules/settingModule/legal/legal";
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

      <Stack.Screen
        name="editProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
