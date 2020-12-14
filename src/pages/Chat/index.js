import React, {useContext, useState, useEffect} from 'react';
import Theme from '../../../Theme';

import {
  Background,
  Header,
  Name,
  List,
  SubmitContainer,
  Text,
  TextContainer,
  SubmitButton,
} from './styles';
import TextCard from '../../components/TextCard';
import TextCard2 from '../../components/TextCard2';
import {chatContext} from '../../contexts/chat';
import {AuthContext} from '../../contexts/auth';

export default function Chat() {
  const {user} = useContext(AuthContext);
  const {chat, createChat, readChat} = useContext(chatContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    readChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat]);

  function handleSubmit() {
    createChat(message);
    setMessage('');
  }

  return (
    <Theme>
      <Background>
        <Header>
          <Name>{user && user.firstName}</Name>
        </Header>
        <List
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
          <TextContainer
            testID="textContainer"
            autoCapitalize="none"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <SubmitButton testID="submitButton" onPress={handleSubmit}>
            <Text>Enviar</Text>
          </SubmitButton>
        </SubmitContainer>
      </Background>
    </Theme>
  );
}
