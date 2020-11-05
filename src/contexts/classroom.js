import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Class from '../services/classroom';

export const ClassroomContext = createContext({});

export default function ClassroomProvider({children}) {
  const [classroom, setClassroom] = useState({});
  const [firstClass, setFirstClass] = useState({});
  const {Host, user, student} = useContext(AuthContext);

  async function loadNextClass() {
    const response = await Class.getNextClassroom(Host);
    if (classroom !== response) {
      console.log(response);
      setFirstClass(response);
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
  }

  async function loadUserClasses() {
    const response = await Class.getUserClassroom(Host,user.id);
    if (classroom !== response) {
      console.log(response);
      setClassroom(response);
    }
    console.log(response);
  } 
    

  return (
    <ClassroomContext.Provider value={{classroom, loadNextClass, createClass, loadUserClasses, firstClass}}>
      {children}
    </ClassroomContext.Provider>
  );
}
