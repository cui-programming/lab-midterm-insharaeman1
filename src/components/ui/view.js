/*// ✅ src/components/ui/View.js
import React from 'react';
import { View as RNView } from 'react-native';

export default function View({ children, style, ...props }) {
  return <RNView style={style} {...props}>{children}</RNView>;
}*/
// ✅ src/components/ui/View.js
import React from 'react';
import { View as RNView } from 'react-native';

export default function View({ children, style, ...props }) {
  return <RNView style={style} {...props}>{children}</RNView>;
}

