//  src/components/ui/index.js
import { Text, TextInput, Button } from '../ui';
import { Text as RNText, TextInput as RNTextInput, Button as RNButton } from 'react-native';
import React from 'react';

//  Custom wrapper for Text
export const Text = (props) => {
  return <RNText {...props} />;
};

//  Custom wrapper for TextInput
export const TextInput = (props) => {
  return <RNTextInput {...props} />;
};

// Custom wrapper for Button
export const Button = (props) => {
  return <RNButton {...props} />;
};
