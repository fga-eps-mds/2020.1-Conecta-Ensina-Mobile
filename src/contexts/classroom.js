import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Class from '../services/classroom';
import * as Student from '../services/student';
import * as Address from '../services/findAddress';
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

  async function getClassroom(status) {
    let teacher, student;
    if (user.role == 2) {
      student = '';
      teacher = user.id;
    } else {
      student = user.id;
      teacher = '';
    }
    const response = await Class.getClassroom(
      (student = student),
      (teacher = teacher),
      status,
      Host,
    );
    if (classroom !== response) {
      console.log(response);
      setClassroom(response);
    }
    console.log(response.message);
  }

  async function updateStatusClassroom(id) {
    const response = await Class.getClass(Host, id);
    if (response.status === 1) {
      const response = await Class.updateStatusClassroom(id, 2, Host);
      console.log(response.message);
    } else if (response.status === 2) {
      const response = await Class.updateStatusClassroom(id, 3, Host);
      console.log(response.message);
    } else if (response.status === 3) {
      const response = await Class.updateStatusClassroom(id, 4, Host);
      console.log(response.message);
    } else if (response.status === 4) {
      const response = await Class.updateStatusClassroom(id, 5, Host);
      console.log(response.message);
    }
  }

  /*async function getClass(id) {
    const response = await Class.getClass(Host, id);
    if (classroom !== response) {
      console.log(response);
      setClassroom(response);
    }
  }*/

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
        getClassroom,
        updateStatusClassroom,
        readClass,
      }}>
      {children}
    </ClassroomContext.Provider>
  );
}
