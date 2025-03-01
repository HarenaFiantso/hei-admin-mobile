import { Redirect } from 'expo-router';

export default function Index() {
  const isSignedIn = false;

  if (isSignedIn) return <Redirect href="/(root)/home" />;

  return <Redirect href="/(auth)/welcome" />;
}
