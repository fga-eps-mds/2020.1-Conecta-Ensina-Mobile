import React, {useState} from 'react';
import Theme from '../../../Theme';

import {
  Background,
  Header,
  Nome,
  Lista,
  SubmitContainer,
  Texto,
  CampoDeTexto,
  SubimitButton,
} from './styles';
import TextCard from '../../components/TextCard';
import TextCard2 from '../../components/TextCard2';

export default function Chat() {
  const [mensagem] = useState([
    {id: '1', name: 'oi gatinha', mode: '1'},
    {id: '2', name: 'melpal', mode: '2'},
    {id: '3', name: 'eae', mode: '1'},
  ]);
  return (
    <Theme>
      <Background>
        <Header>
          <Nome>Carlos</Nome>
        </Header>
        <Lista
          data={mensagem}
          keyExtractor={(item) => item.id}
          renderItem={({item}) =>
            item.mode === '1' ? (
              <TextCard data={item} />
            ) : (
              <TextCard2 data={item} />
            )
          }
          inverted
        />
        <SubmitContainer>
          <CampoDeTexto />
          <SubimitButton>
            <Texto>Enviar</Texto>
          </SubimitButton>
        </SubmitContainer>
      </Background>
    </Theme>
  );
}
