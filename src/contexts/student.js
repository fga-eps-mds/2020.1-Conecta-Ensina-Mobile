import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Student from '../services/student';

export const StudentContext = createContext({});

export default function UserProvider({children}) {
  const [student, setStudent] = useState({});
  const [studentStack, setStudentStack] = useState([]);
  const {Host} = useContext(AuthContext);

  async function getStudent(id) {
    const response = await Student.getStudent(Host, id);
    if (student !== response) {
      setStudent(response);
    }
  }

  async function stackStudents(list) {
    setStudentStack(list);
  }

  return (
    <StudentContext.Provider
      value={{student, getStudent, studentStack, stackStudents, setStudent}}>
      {children}
    </StudentContext.Provider>
  );
}
