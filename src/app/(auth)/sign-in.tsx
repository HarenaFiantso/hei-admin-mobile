import { Button } from '@/components';
import * as Styled from '@/styles/sign-in.style';
import { useState } from 'react';
import { ScrollView } from 'react-native';

export default function SignIn() {
  const [isFocused, setIsFocused] = useState(false);

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
            <Styled.FormInput
              placeholder="Email"
              placeholderTextColor="#b4b4b4"
              textColor={isFocused ? 'white' : 'black'}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Styled.FormInput
              placeholder="Mot de passe"
              placeholderTextColor="#b4b4b4"
              textColor={isFocused ? 'white' : 'black'}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Styled.ForgotPasswordText>Mot de passe oublié?</Styled.ForgotPasswordText>
          </Styled.FormWrapper>
          <Button text="Connexion" style={{ width: '90%', marginTop: 40 }} />
        </Styled.ContentWrapper>
      </ScrollView>
    </Styled.ScreenContainer>
  );
}
