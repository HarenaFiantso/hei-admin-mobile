import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';

export const FormGroup = styled(View)``;

export const Label = styled(Text)`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled(TextInput)`
  border-radius: 24px;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 20px;
  color: ${({ textColor }: { textColor: string }) => textColor};
`;
