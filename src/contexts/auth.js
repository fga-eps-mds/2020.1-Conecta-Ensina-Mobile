import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user /*,setUser*/] = useState(null); //setUser será usado para guardar o id e o nome do usuario
  const [typeUser, setTypeUser] = useState(null);

  async function signIn(email, password) {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    const fetchResponse1 = await fetch(
      'http://192.168.0.8:3333/api/users/login',
      settings,
    );
    try {
      const data = await fetchResponse1.json();
      console.log('Success:', data);
      if (data.message) {
        if (data.message === 'Login efetuado com sucesso') {
          console.log('login efetuado');
          if (data.role === 2) {
            setTypeUser('Professor');
            console.log('Professor');
          } else {
            setTypeUser('Aluno');
            console.log('aluno');
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <AuthContext.Provider
      value={{signed: true /*(!! user)*/, user, typeUser, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
