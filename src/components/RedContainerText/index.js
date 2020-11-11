import React from 'react';
import {RedContainer} from './styles';
import CustomText from '../CustomText';

export default function RedContainerText({children, medium, small}) {
  return (
    <RedContainer medium={medium} small={small}>
      <CustomText white small>
        {children}
      </CustomText>
    </RedContainer>
  );
}
