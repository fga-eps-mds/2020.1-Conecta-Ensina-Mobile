import React from 'react';
import {BlueInput} from './styles';

export default function RegFieldMedium(props) {
  return (
    <BlueInput
      placeholder={props.placeholder}
      autoCapitalize={props.autoCapitalize}
      onChangeText={props.onChangeText}
    />
  );
}
