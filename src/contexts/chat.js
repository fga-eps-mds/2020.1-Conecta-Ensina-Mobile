import React, {createContext, useState, useContext, useEffect} from 'react';
import {AuthContext} from './auth';
import * as Chat from '../services/chat';
import { ClassroomContext } from './classroom';

export const chatContext = createContext({});

export default function ChatProvider({children}) {
  const {Host, user} = useContext(AuthContext);
  const {classroom} = useContext(ClassroomContext);
  const [chat, setChat] = useState(null);

  useEffect(() => {
      readChat()
  }, [])

  async function createChat(text) {
    const response = await Chat.createMessage(
        user.id, 
        text, 
        classroom.id, 
        classroom.teacher, 
        classroom.student, 
        Host)
  }

  async function readChat() {
    console.log(classroom)
    const response = await Chat.getChat(Host, classroom.id);
    if (chat !== response) {
      setChat(response);
    }
  }
  return (
    <chatContext.Provider
      value={{
        readChat,
        createChat,
        chat
      }}>
      {children}
    </chatContext.Provider>
  );
}
