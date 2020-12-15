import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Chat from '../../src/pages/Chat';
import {chatContext} from '../../src/contexts/chat';
import {AuthContext} from '../../src/contexts/auth';

describe('Testing Chat page', () => {
  const readChat = jest.fn();
  const createChat = jest.fn();
  const user = {
    id: 'teste',
  };

  test('should view all the chat message', () => {
    const chat = [
      {
        create_by: 'teste',
        id: 'teste_one_id',
      },
      {
        create_by: 'teste_two',
        id: 'teste_two_id',
      },
    ];
    const tree = render(
      <AuthContext.Provider value={{user}}>
        <chatContext.Provider value={{readChat, createChat, chat}}>
          <Chat />
        </chatContext.Provider>
      </AuthContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should create a message when change text', () => {
    const chat = {
      create_by: 'teste',
      id: 'teste_id',
    };
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <chatContext.Provider value={{readChat, createChat, chat}}>
          <Chat />
        </chatContext.Provider>
      </AuthContext.Provider>,
    );

    const text = getByTestId('textContainer');

    fireEvent.changeText(text);
  });

  test('should press submitButton', () => {
    const chat = {
      create_by: 'teste',
      id: 'teste_id',
    };
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <chatContext.Provider value={{readChat, createChat, chat}}>
          <Chat />
        </chatContext.Provider>
      </AuthContext.Provider>,
    );
    const button = getByTestId('submitButton');
    fireEvent.press(button);
  });

  test('should match snapshot page', () => {
    const chat = {
      create_by: 'teste',
      id: 'teste_id',
    };
    const tree = render(
      <AuthContext.Provider value={{user}}>
        <chatContext.Provider value={{readChat, createChat, chat}}>
          <Chat />
        </chatContext.Provider>
      </AuthContext.Provider>,
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
