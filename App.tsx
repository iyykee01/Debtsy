import { StatusBar } from "expo-status-bar";
import { BottomsheetHeader } from "./src/components/Bottomsheet/BottomsheetHeader";
import { ProfileComponent } from "./src/components/Profile/ProfileComponent";
import { TextComponent } from "./src/components/Text/TextComponent";
import Signup from "./src/screens/SignUp/Signup";
import { Container } from "./src/styles/Container";
import { useFonts } from "expo-font";

export default function App() {
  const [loadedFont] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterThin: require("./assets/fonts/Inter-Thin.ttf"),
  });

  if (!loadedFont) return null;

  return (
    <Container style={{ justifyContent: "center" }}>
      <StatusBar style="auto" />
      <Signup />
    </Container>
  );
}
