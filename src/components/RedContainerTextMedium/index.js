import React from 'react';
import {RedContainer} from './styles';
import CustomText from '../CustomText';

export default function RedContainerTextMedium({children}) {
  return (
    <RedContainer>
      <CustomText white smallMedium>
        {children}
      </CustomText>
    </RedContainer>
  );
}
