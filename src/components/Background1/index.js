import React from 'react';
import Theme from '../../../Theme';
import {
  BlueContainer,
  WhiteContainer,
  Usercontainer,
  UserTexto,
  UserAvatar,
} from './styles';

export default function Background1({children}) {
  return (
    <Theme>
      <BlueContainer>
        <Usercontainer>
          <UserAvatar />
          <UserTexto>Nome do Aluno</UserTexto>
        </Usercontainer>
        <WhiteContainer>{children}</WhiteContainer>
      </BlueContainer>
    </Theme>
  );
}
