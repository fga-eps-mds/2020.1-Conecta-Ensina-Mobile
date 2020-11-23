import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Teacher from '../services/teacher';

export const TeacherContext = createContext({});

export default function TeacherProvider({children}) {
  const [teacher, setTeacher] = useState({});
  const {Host} = useContext(AuthContext);

  async function loadTeachers() {
    const response = await Teacher.getAllTeachers(Host);
    if (teacher !== response) {
      console.log(response);
      setTeacher(response);
    }
  }
  async function getTeacher(id) {
    const response = await Teacher.getTeacher(Host, id);
    if (teacher !== response) {
      console.log(response);
      setTeacher(response);
    }
  }

  return (
    <TeacherContext.Provider value={{teacher, loadTeachers, getTeacher}}>
      {children}
    </TeacherContext.Provider>
  );
}
