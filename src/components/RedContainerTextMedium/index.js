import React from 'react';
import {Texto, RedContainer} from './styles';
import CustomText from '../CustomText';

export default function RedContainerTextSmall({children}) {
  return (
    <RedContainer>
      <CustomText white smallMedium>
        {children}
      </CustomText>
    </RedContainer>
  );
}
