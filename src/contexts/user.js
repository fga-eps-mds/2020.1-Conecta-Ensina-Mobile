import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as User from '../services/user';

export const UserContext = createContext({});

export default function UserProvider({children}) {
  const [user, setUser] = useState({});
  const {Host} = useContext(AuthContext);

  async function getUser(id) {
    const response = await User.getUser(Host, id);
    if (User !== response) {
      setUser(response);
    }
  }

  return (
    <UserContext.Provider value={{user, getUser}}>
      {children}
    </UserContext.Provider>
  );
}
