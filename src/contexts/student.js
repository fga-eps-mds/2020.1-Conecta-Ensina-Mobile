import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Student from '../services/student';

export const StudentContext = createContext({});

export default function UserProvider({children}) {
  const [student, setStudent] = useState({});
  const {Host} = useContext(AuthContext);

  async function getStudent(id) {
    const response = await Student.getStudent(Host, id);
    if (student !== response) {
      setStudent(response);
    }
  }

  async function getStudent2(id) {
    const response = await Student.getStudent2(Host, id);
    if (student !== response) {
      setStudent(response);
    }
  }

  return (
    <StudentContext.Provider value={{student, getStudent, getStudent2}}>
      {children}
    </StudentContext.Provider>
  );
}
