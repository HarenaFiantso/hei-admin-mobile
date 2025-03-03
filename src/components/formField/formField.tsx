import { FormFieldProps } from '@/components/formField/formField.props';
import * as Styled from '@/components/formField/formField.style';
import { useState } from 'react';

export function FormField({ label, labelStyle, value, placeholder }: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Styled.FormGroup>
      <Styled.Label style={labelStyle}>{label}</Styled.Label>
      <Styled.Input
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#b4b4b4"
        style={{ fontFamily: 'Poppins-Regular' }}
        textColor={isFocused ? 'white' : 'black'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Styled.FormGroup>
  );
}
