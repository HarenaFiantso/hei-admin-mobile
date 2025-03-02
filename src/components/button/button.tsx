import { ButtonProps } from '@/components/button/button.props';
import * as Styled from '@/components/button/button.style';
import { ActivityIndicator } from 'react-native';

export function Button({
  text,
  children,
  style,
  textStyle,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Styled.CustomButton
      activeOpacity={0.7}
      style={style}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Styled.CustomButtonText style={textStyle}>{children ?? text}</Styled.CustomButtonText>
      )}
    </Styled.CustomButton>
  );
}
