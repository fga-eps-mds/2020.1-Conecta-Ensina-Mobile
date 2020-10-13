import React,{createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [typeUser, setTypeUser] = useState(null);

  function userSelected(string){
    setTypeUser(string);
  }

  return(
    <AuthContext.Provider value={{signed: true/*(!! user)*/, user, typeUser, userSelected}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;