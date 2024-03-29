import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfirmOTP from "../modules/authModule/ConfirmOTP/ConfirmOTP";
import ForgotPassword from "../modules/authModule/ForgotPassword/ForgotPassword";
import Login from "../modules/authModule/Login/Login";
import Signup from "../modules/authModule/SignUp/Signup";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Confirm_OTP"
        component={ConfirmOTP}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
