import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [typeUser, setTypeUser] = useState(null);

  async function signIn(email, password){
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
        'http://172.17.245.49:3333/api/user/login',
        settings,
      );
      try {
        const data = await fetchResponse1.json();
        console.log('Success:', data);
        if (data.message) {
          if (data.message === 'Login efetuado com sucesso!') {
            console.log("login efetuado")
            let usuario = {
              firstName: data.firstName,
              id: data.id,
            }
            setUser(usuario)
          if (data.role === 1){ 
              setTypeUser('Adm')
              console.log("Adm")
          } else if(data.role === 2){
              setTypeUser('Professor')
              console.log("Professor")
            } else{
              setTypeUser('Aluno')
              console.log("aluno")
            }
          }
        }
      }catch(error){
        console.error('Error:', error);
      }
  }

  return(
    <AuthContext.Provider value={{signed: true/*(!! user)*/, user, typeUser, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
