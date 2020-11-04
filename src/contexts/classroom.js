import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Class from '../services/classroom';

export const ClassroomContext = createContext({});

export default function ClassroomProvider({children}) {
  const [classroom, setClassroom] = useState({});
  const {Host, user, student} = useContext(AuthContext);

  async function loadNextClass() {
    const response = await Class.getNextClassroom(Host);
    if (classroom !== response) {
      console.log(response);
      setClassroom(response);
    }
  }
  async function createClass(teacher, filtros, subject) {
    const response = await Class.createClass(
      user,
      teacher,
      subject,
      filtros,
      student,
      Host,
    );

    console.log(response);
  }

  return (
    <ClassroomContext.Provider value={{classroom, loadNextClass, createClass}}>
      {children}
    </ClassroomContext.Provider>
  );
}
