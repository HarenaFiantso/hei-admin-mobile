import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Poppins-Black': require('assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('assets/fonts/Poppins-Thin.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
