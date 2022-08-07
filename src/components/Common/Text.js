import React from 'react';
import {Text} from 'react-native';

export default function CustomText(props) {
  return (
    <Text {...props} style={props.style}>
      {props.children}
    </Text>
  );
}
