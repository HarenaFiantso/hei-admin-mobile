import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const CustomButton = styled(TouchableOpacity)`
  background-color: #dfa408;
  border-radius: 20px;
  min-height: 60px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

export const CustomButtonText = styled(Text)`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
