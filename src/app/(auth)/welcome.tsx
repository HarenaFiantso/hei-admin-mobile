import { Button } from '@/components';
import * as Styled from '@/styles/welcome.style';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

export default function Welcome() {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.BannerBackground source={require('assets/images/banner.jpg')}>
        <Styled.Overlay />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Styled.Content>
            <Styled.Logo source={require('assets/images/hei-logo.png')} resizeMode="contain" />
            <Styled.TitleContainer style={{ fontFamily: 'Poppins-Bold' }}>
              <Styled.WelcomeTitle>HEI ADMIN</Styled.WelcomeTitle>
            </Styled.TitleContainer>
            <Styled.WelcomeDescription style={{ fontFamily: 'Poppins-Regular' }}>
              Plateforme conçue pour les étudiants de la {'\n'} Haute École d'Informatique - HEI
              Madagascar
            </Styled.WelcomeDescription>
            <Button
              text="Connexion"
              style={{ width: '100%', marginTop: 40 }}
              onPress={() => router.push('/sign-in')}
            />
          </Styled.Content>
        </ScrollView>
      </Styled.BannerBackground>
      <StatusBar backgroundColor="transparent" />
    </Styled.Container>
  );
}
