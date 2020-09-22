import React from 'react';
import Theme from '../../../Theme';
import {
  WhiteContainer,
  BlueContainer,
  Usercontainer,
  UserTexto,
  UserAvatar,
} from '../../components/StyleBackground1/styles';
import {} from './styles'

export default function Home() {
  return (
    <Theme>
      <BlueContainer>
        <Usercontainer>
          <UserAvatar /> 
          <UserTexto>Nome do Aluno</UserTexto>
        </Usercontainer>
        <WhiteContainer>

        </WhiteContainer>
      </BlueContainer>
    </Theme>
  );
}
