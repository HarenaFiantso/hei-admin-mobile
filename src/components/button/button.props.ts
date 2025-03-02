import React from 'react';
import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Optional children to display inside the button.
   */
  children?: React.ReactNode;

  /**
   * Shows a loading indicator instead of text.
   */
  isLoading?: boolean;

  /**
   * Disables the button.
   */
  disabled?: boolean;
}
