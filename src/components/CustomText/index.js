import React from 'react';
import {Texto} from './styles';

export default function CustomText(props) {
  return (
    <Texto
      white={props.white}
      black={props.black}
      blue={props.blue}
      smaller={props.smaller}
      small={props.small}
      bigSmall={props.bigSmall}
      smallMedium={props.smallMedium}
      medium={props.medium}
      bigMedium={props.bigMedium}
      big={props.big}>
      {props.children}
    </Texto>
  );
}
