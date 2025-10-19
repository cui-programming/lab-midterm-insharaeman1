/*//  src/components/ui/index.js
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
// ✅ Barrel export for all UI components
export { default as Text } from './Text';
export { default as Button } from './Button';
export { default as TextInput } from './TextInput';*/
// src/components/ui/index.js
// ✅ Barrel file for UI components (used in all custom components)

// src/components/ui/index.js
export { Text } from './Text';
export { Button } from './Button';
