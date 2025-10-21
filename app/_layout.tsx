import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "./global.css";
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "poppins-light": Poppins_300Light,
    "poppins-regular": Poppins_400Regular,
    "poppins-medium": Poppins_500Medium,
    "poppins-semi-bold": Poppins_600SemiBold,
    "poppins-bold": Poppins_700Bold,
    "poppins-extra-bold": Poppins_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
