import { StyleProp, TextInputProps, TextStyle } from 'react-native';

export interface FormFieldProps extends TextInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  value: string;
  placeholder: string;
}
