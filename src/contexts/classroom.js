import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Class from '../services/classroom';
import * as Student from '../services/student';
import {FiltersContext} from '../contexts/filters';

export const ClassroomContext = createContext({});

export default function ClassroomProvider({children}) {
  const [classroom, setClassroom] = useState({});
  const [firstClass, setFirstClass] = useState({});
  const {Host, user} = useContext(AuthContext);
  const {filter} = useContext(FiltersContext);

  async function loadNextClass() {
    const response = await Class.getNextClassroom(Host);
    if (classroom !== response) {
      console.log(response);
      setFirstClass(response);
    }
  }
  async function createClass(teacher) {
    const student = await Student.getStudent(Host, user.id);
    console.log(student);
    const response = await Class.createClass(
      user,
      teacher,
      filter,
      student,
      Host,
    );
    console.log(response.message);
  }

  async function loadUserClasses() {
    const response = await Class.getUserClassroom(Host, user.id);
    if (classroom !== response) {
      console.log(response);
      setClassroom(response);
    }
    console.log(response);
  }

  return (
    <ClassroomContext.Provider
      value={{
        classroom,
        loadNextClass,
        createClass,
        loadUserClasses,
        firstClass,
      }}>
      {children}
    </ClassroomContext.Provider>
  );
}
