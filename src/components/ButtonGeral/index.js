import React from 'react';
import CustomText from '../CustomText';
import {ButtonGeral} from './styles';

<<<<<<< HEAD
export default function BotaoGeral() {
  return <ButtonGeral />;
=======
export default function BotaoGeral({children}) {
  return (
    <ButtonGeral>
      <CustomText white small>
        {children}
      </CustomText>
    </ButtonGeral>
  );
>>>>>>> 2e5b79381e511676b1eacc73f6c6f9b5bf94b2d7
}
