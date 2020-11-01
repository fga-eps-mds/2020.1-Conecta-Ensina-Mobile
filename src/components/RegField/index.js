import React from 'react';
import {BlueInput} from './styles';

export default function RegField(props) {
  return (
    <BlueInput
      placeholder={props.placeholder}
      autoCapitalize={props.autoCapitalize}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      medium={props.medium}
      small={props.small}
    />
  );
}
