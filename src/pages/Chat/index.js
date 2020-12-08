import React, {useContext, useState, useEffect} from 'react';
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
import { chatContext } from '../../contexts/chat';
import { AuthContext } from '../../contexts/auth';

export default function Chat() {
  const {user} = useContext(AuthContext);
  const {chat, createChat, readChat} = useContext(chatContext);
  const [message, setMessage] = useState('')

  useEffect(() => {
    readChat()
  }, [chat])
   
  function handleSubmit(){
    createChat(message);
    setMessage('');
  }

  return (
    <Theme>
      <Background>
        <Header>
          <Nome>{user && user.firstName}</Nome>
        </Header>
        <Lista
          data={chat}
          keyExtractor={(item) => item.id}
          renderItem={({item}) =>
            item.create_by === user.id ? (
              <TextCard data={item} />
            ) : (
              <TextCard2 data={item} />
            )
          }
        />
        <SubmitContainer>
          <CampoDeTexto 
            autoCapitalize="none"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <SubimitButton onPress={handleSubmit}>
            <Texto>Enviar</Texto>
          </SubimitButton>
        </SubmitContainer>
      </Background>
    </Theme>
  );
}
