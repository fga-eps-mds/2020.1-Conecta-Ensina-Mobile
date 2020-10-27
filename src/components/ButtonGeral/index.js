import React from 'react';
import CustomText from '../CustomText';
import {ButtonGeral} from './styles';

export default function BotaoGeral({children}) {
  return (
    <ButtonGeral>
      <CustomText white small>
        {children}
      </CustomText>
    </ButtonGeral>
  );
}
