import { View } from 'react-native';
import styled from 'styled-components/native';
import { palette } from '@/theme/haPalette';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignIn() {
  return <Container></Container>;
}

const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${palette.heiBlue};
`

