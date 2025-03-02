import { Button } from '@/components';
import { palette } from '@/theme/haPalette';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export default function SignIn() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ScreenContainer>
      <ScrollView>
        <ContentWrapper>
          <AppLogo source={require('assets/images/hei-logo.png')} resizeMode="contain" />
          <MainTitle>Bienvenue sur HEI Admin !</MainTitle>
          <SubTitle>
            Veuillez remplir le formulaire ci-après pour se connecter à votre compte
          </SubTitle>
          <FormWrapper>
            <FormInput
              placeholder="Email"
              placeholderTextColor="#b4b4b4"
              textColor={isFocused ? 'white' : 'black'}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <FormInput
              placeholder="Mot de passe"
              placeholderTextColor="#b4b4b4"
              textColor={isFocused ? 'white' : 'black'}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <ForgotPasswordText>Mot de passe oublié?</ForgotPasswordText>
          </FormWrapper>
          <Button text="Connexion" style={{ width: '90%', marginTop: 40 }} />
        </ContentWrapper>
      </ScrollView>
    </ScreenContainer>
  );
}

export const ScreenContainer = styled(LinearGradient).attrs({
  colors: [`${palette.heiBlue}`, `${palette.heiLightBlueSecondVariant}`],
})`
  flex: 1;
`;

const ContentWrapper = styled(View)`
  min-height: 100%;
  align-items: center;
  justify-content: center;
  padding-inline: 4px;
`;

const AppLogo = styled(Image)`
  width: 110px;
`;

const MainTitle = styled(Text)`
  font-size: 20px;
  text-align: center;
  color: ${palette.white};
  font-family: 'Poppins-SemiBold';
`;

const SubTitle = styled(Text)`
  font-size: 12px;
  padding-inline: 10px;
  text-align: center;
  color: ${palette.lightgray};
  font-family: 'Poppins-Regular';
`;

const FormWrapper = styled(View)`
  margin-top: 50px;
  width: 90%;
  gap: 10px;
`;

const FormInput = styled(TextInput)`
  border-radius: 24px;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 20px;
  color: ${({ textColor }: { textColor: string }) => textColor};
`;

const ForgotPasswordText = styled(Text)`
  text-align: right;
  font-size: 12px;
  color: #b4b4b4;
  font-family: 'Poppins-Regular';
`;
