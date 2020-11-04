import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Class from '../services/classroom';

export const ClassroomContext = createContext({});

export default function ClassroomProvider({children}) {
  const [classroom, setClassroom] = useState({});
  const {Host} = useContext(AuthContext);

  async function loadNextClass() {
    const response = await Class.getNextClassroom(Host);
    console.log(response);
    setClassroom(response);
  }

  return (
    <ClassroomContext.Provider value={{classroom, loadNextClass}}>
      {children}
    </ClassroomContext.Provider>
  );
}
