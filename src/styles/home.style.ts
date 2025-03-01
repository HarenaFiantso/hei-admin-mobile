import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => props.theme.background};
`;

export const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 30px;
  color: ${(props: any) => props.theme.textColor};
`;
