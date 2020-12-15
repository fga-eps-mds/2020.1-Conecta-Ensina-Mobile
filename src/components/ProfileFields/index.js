import React from 'react';
import {TextContainer} from './styles';

import CustomText from '../CustomText';

export default function RegField(props) {
  return (
    <>
      <CustomText black medium>
        {props.field}
      </CustomText>
      <TextContainer>
        <CustomText white medium>
          {props.children}
        </CustomText>
      </TextContainer>
    </>
  );
}
