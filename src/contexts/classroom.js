import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Class from '../services/classroom';
import * as Student from '../services/student';
import * as Address from '../services/findAddress';
import {FiltersContext} from '../contexts/filters';
import {StudentContext} from '../contexts/student';

export const ClassroomContext = createContext({});

export default function ClassroomProvider({children}) {
  const [classroom, setClassroom] = useState({});
  const [firstClass, setFirstClass] = useState(null);
  const [classes, setClasses] = useState(null);
  const {Host, user} = useContext(AuthContext);
  const {stackStudents} = useContext(StudentContext);
  const {filter} = useContext(FiltersContext);
  const [statusClasses, setStatusClasses] = useState([]);
  const [statusClass, setStatusClass] = useState({});

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

  async function loadStatusClasses(status) {
    const response = await Class.getStatusClassroom(Host, user.id, status);
    if (statusClasses !== response) {
      await setStatusClasses(response);
    }
    console.log(response);
    return response;
  }

  async function loadStatusClassesStudents(status) {
    const response = await loadStatusClasses(status);
    let studentList = await {list: []};
    await Promise.all(
      response.map(async (item) => {
        const student = await Student.getStudent2(Host, item.student);
        studentList.list = await studentList.list.concat(student);
      }),
    );
    await stackStudents(studentList.list);
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

  async function getClass() {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        teacher: user.id,
        status: 0,
      }),
    };
    const fetchResponse1 = await fetch(Host + '/api/classroom/', settings);
    try {
      const data = await fetchResponse1.json();
      setClasses(data.data.classroom);
    } catch (error) {
      return error;
    }
  }

  async function updateStatusClasses(id, status) {
    const response = await Class.updateStatus(id, status, Host);
    if (classroom !== response) {
      setClassroom(response);
    }
  }
  return (
    <ClassroomContext.Provider
      value={{
        classroom,
        firstClass,
        classes,
        loadNextClass,
        createClass,
        loadUserClasses,
        loadStatusClasses,
        readClass,
        statusClasses,
        statusClass,
        setStatusClass,
        setStatusClasses,
        Host,
        getClass,
        updateStatusClasses,
        loadStatusClassesStudents,
      }}>
      {children}
    </ClassroomContext.Provider>
  );
}
