import React from 'react';
import CustomText from '../CustomText';
import {ButtonGeral} from './styles';
import Theme from '../../../Theme';

export default function BotaoGeral({children}) {
  return (
    <Theme>
      <ButtonGeral>
        <CustomText white small>
          {children}
        </CustomText>
      </ButtonGeral>
    </Theme>
  );
}
