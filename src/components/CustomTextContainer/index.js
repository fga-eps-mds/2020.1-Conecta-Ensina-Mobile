import React from 'react';
import CustomText from '../CustomText';

import {Container} from './styles';

export default function CustomTextContainer(props) {
  return (
    <Container marginTop={props.marginTop} marginBot={props.marginBot}>
      <CustomText
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
      </CustomText>
    </Container>
  );
}
