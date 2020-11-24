import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Student from '../services/student';

export const ComplainContext = createContext({});

export default function ComplainProvider({children}) {
  const [complain, setComplain] = useState({});
  const {Host, user} = useContext(AuthContext);

  async function createComplain(details,accused) {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        accused: accused,
        reported_by: user.id,
        details: details,
      })
    }
    const response = await fetch(`${Host}/api/complain/create`, settings)
    try{
      const data = response.json();
      console.log("Complain:", data);
      if (data.message === 'Denúncia criada com sucesso!'){
        return data;
      }
    } catch(error) {
      console.error("error: ", error)
    }
  }

  return (
    <ComplainContext.Provider value={{complain, createComplain}}>
      {children}
    </ComplainContext.Provider>
  );
}