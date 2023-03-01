import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DebtDetails from "../modules/debtModule/debtDetails/debtDetails";
import DebtsScreen from "../modules/debtModule/debts/debts";

const Stack = createNativeStackNavigator();

const DebtNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DebtHome"
        component={DebtsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DebtDetail"
        component={DebtDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DebtNavigation;
