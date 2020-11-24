import React from 'react';
import {RedInput} from './styles';

export default function CommentaryBox(props) {
  return (
    <RedInput
      placeholder={props.placeholder}
      autoCapitalize={props.autoCapitalize}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
    />
  );
}
