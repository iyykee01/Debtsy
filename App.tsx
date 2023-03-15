import React, { createContext, useCallback, useMemo, useState } from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { customFonts } from "./src/helpers/fonts";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import TabNavigation from "./src/navigation/TabNavigator";
import { PortalProvider } from "@gorhom/portal";
import {
  checkToken,
  deleteData,
  getData,
  removeToken,
} from "./src/helpers/methods";
import { store } from "./src/redux/store";

SplashScreen.preventAutoHideAsync();

export const NavContext = createContext(null);
const navigationRef = createNavigationContainerRef();

const App = () => {
  const [fontsLoaded] = useFonts(customFonts);
  const [loginState, setLoginState] = useState(false);

  const authContext = useMemo(
    () => ({
      login: async () => {
        try {
          const value = await checkToken();
          setLoginState(value);
        } catch (error) {
          alert("Something went wrong");
        }
      },
      logout: async () => {
        try {
          await removeToken();
          setLoginState(false);
        } catch (error) {
          alert("Something went wrong");
        }
      },
    }),
    []
  );

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <NavContext.Provider value={authContext}>
          <PortalProvider>
            <NavigationContainer ref={navigationRef}>
              {loginState ? <TabNavigation /> : <AuthNavigation />}
            </NavigationContainer>
          </PortalProvider>
        </NavContext.Provider>
      </Provider>
    </View>
  );
};
export default App;
