import { palette } from '@/theme/haPalette';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const ScreenContainer = styled(LinearGradient).attrs({
  colors: [`${palette.heiBlue}`, `${palette.heiLightBlueSecondVariant}`],
})`
  flex: 1;
`;

export const ContentWrapper = styled(View)`
  min-height: 100%;
  align-items: center;
  justify-content: center;
  padding-inline: 4px;
`;

export const AppLogo = styled(Image)`
  width: 110px;
`;

export const MainTitle = styled(Text)`
  font-size: 20px;
  text-align: center;
  color: ${palette.white};
  font-family: 'Poppins-SemiBold';
`;

export const SubTitle = styled(Text)`
  font-size: 12px;
  padding-inline: 10px;
  text-align: center;
  color: ${palette.lightgray};
  font-family: 'Poppins-Regular';
`;

export const FormWrapper = styled(View)`
  margin-top: 50px;
  width: 90%;
  gap: 10px;
`;

export const ForgotPasswordText = styled(Text)`
  text-align: right;
  font-size: 12px;
  color: ${palette.lightgray};
  font-family: 'Poppins-Regular';
`;
