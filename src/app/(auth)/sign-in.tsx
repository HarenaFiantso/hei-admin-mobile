import { Button, FormField } from '@/components';
import * as Styled from '@/styles/sign-in.style';
import { ScrollView } from 'react-native';

export default function SignIn() {
  return (
    <Styled.ScreenContainer>
      <ScrollView>
        <Styled.ContentWrapper>
          <Styled.AppLogo source={require('assets/images/hei-logo.png')} resizeMode="contain" />
          <Styled.MainTitle>Bienvenue sur HEI Admin !</Styled.MainTitle>
          <Styled.SubTitle>
            Veuillez remplir le formulaire ci-après pour se connecter à votre compte
          </Styled.SubTitle>
          <Styled.FormWrapper>
            <FormField value="" placeholder="Email" labelStyle={{ color: 'white' }} />
            <FormField value="" placeholder="Mot de passe" labelStyle={{ color: 'white' }} />
            <Styled.ForgotPasswordText>Mot de passe oublié?</Styled.ForgotPasswordText>
          </Styled.FormWrapper>
          <Button text="Connexion" style={{ width: '90%', marginTop: 40 }} />
        </Styled.ContentWrapper>
      </ScrollView>
    </Styled.ScreenContainer>
  );
}
