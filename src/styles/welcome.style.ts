import { Animated, ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BannerBackground = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: linear-gradient(rgba(0, 21, 56, 0.7) rgba(0, 21, 56, 0.9));
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
  color: white;
  margin-top: 20px;
`;

export const WelcomeTitle = styled.Text`
  font-size: 30px;
`;

export const WelcomeDescription = styled.Text`
  color: white;
  text-align: center;
  margin-top: 30px;
  font-size: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #dfa408;
  border-radius: 20px;
  min-height: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;

export const LoginButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
