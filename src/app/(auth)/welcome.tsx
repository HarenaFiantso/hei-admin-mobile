import * as Styled from '@/styles/welcome.style';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

export default function Welcome() {
  return (
    <Styled.Container>
      <Styled.BannerBackground source={require('assets/images/banner.jpg')}>
        <Styled.Overlay />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <Styled.Content>
            <Styled.Logo source={require('assets/images/hei-logo.png')} resizeMode="contain" />
            <Styled.TitleContainer style={{ fontFamily: 'Poppins-Bold' }}>
              <Styled.WelcomeTitle>HEI ADMIN</Styled.WelcomeTitle>
            </Styled.TitleContainer>
            <Styled.WelcomeDescription style={{ fontFamily: 'Poppins-Regular' }}>
              Plateforme conçue pour les étudiants de la {'\n'} Haute École d'Informatique - HEI
              Madagascar
            </Styled.WelcomeDescription>
            <Styled.LoginButton>
              <Styled.LoginButtonText style={{ fontFamily: 'Poppins-SemiBold' }}>
                Connexion
              </Styled.LoginButtonText>
            </Styled.LoginButton>
          </Styled.Content>
        </ScrollView>
      </Styled.BannerBackground>
      <StatusBar backgroundColor="transparent" />
    </Styled.Container>
  );
}
