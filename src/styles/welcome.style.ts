import { palette } from '@/theme/haPalette';
import { ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BannerBackground = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled(LinearGradient).attrs({
  colors: ['rgba(0, 21, 56, 0.5)', 'rgba(0, 21, 56, 1)'],
})`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex: 0.5;
  top: 50%;
  padding-inline: 20px;
`;

export const Logo = styled.Image`
  width: 130px;
  height: 84px;
`;

export const TitleContainer = styled.Text`
  text-align: center;
  color: ${palette.white};
  margin-top: 20px;
`;

export const WelcomeTitle = styled.Text`
  font-size: 30px;
`;

export const WelcomeDescription = styled.Text`
  color: ${palette.white};
  text-align: center;
  margin-top: 30px;
`;
