import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Class from '../services/classroom';
import * as Student from '../services/student';
import * as Address from '../services/findAddress';
import {FiltersContext} from '../contexts/filters';

export const ClassroomContext = createContext({});

export default function ClassroomProvider({children}) {
  const [classroom, setClassroom] = useState({});
  const [firstClass, setFirstClass] = useState(null);
  const {Host, user} = useContext(AuthContext);
  const {filter} = useContext(FiltersContext);

  async function loadNextClass() {
    const response = await Class.getNextClassroom(Host);
    if (classroom !== response) {
      setFirstClass(response);
    }
  }
  async function createClass(teacher) {
    const student = await Student.getStudent(Host, user.id);
    const response = await Class.createClass(
      user,
      teacher,
      filter,
      student,
      Host,
    );
  }

  async function loadUserClasses() {
    const response = await Class.getUserClassroom(Host, user.id);
    if (classroom !== response) {
      setClassroom(response);
    }
  }

  async function readClass(id) {
    const response = await Class.getClass(Host, id);
    const address = await Address.findAddress(response.cep);
    let responseClass = {
      id: response.role,
      teacher: response.teacher,
      student: response.student,
      grade: response.grade,
      subject: response.subject,
      dtclass: response.dtClass,
      duration: response.duration,
      cep: response.cep,
      number: response.number,
      details: response.details,
      address: address,
    };
    if (classroom !== response) {
      setClassroom(responseClass);
    }
  }
  return (
    <ClassroomContext.Provider
      value={{
        classroom,
        loadNextClass,
        createClass,
        loadUserClasses,
        firstClass,
        readClass,
      }}>
      {children}
    </ClassroomContext.Provider>
  );
}
