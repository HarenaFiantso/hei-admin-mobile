import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function AuthLayout() {
  const [loaded, error] = useFonts({
    'Poppins-Black': require('assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Regular': require('assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('assets/fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
    </Stack>
  );
}
