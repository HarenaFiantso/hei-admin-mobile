import { darkTheme, lightTheme } from '@/haTheme';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const scheme = useColorScheme();
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

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
