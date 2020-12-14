import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Class from '../services/classroom';
import * as Student from '../services/student';
import * as Address from '../services/findAddress';
import * as GeoCode from '../services/geocode';
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
  const [coordenates, setCoordenates] = useState({});

  async function loadNextClass() {
    const response = await Class.getNextClassroom(Host);
    if (classroom !== response) {
      setFirstClass(response);
    }
  }
  async function createClass(teacher) {
    //console.log('Esse aqui é o professor: ' + teacher);
    const student = await Student.getStudent(Host, user.id);
    const response = await Class.createClass(
      user,
      teacher,
      filter,
      student.student,
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
    if (user.role === 2) {
      student = '';
      teacher = user.id;
    } else {
      student = user.id;
      teacher = '';
    }
    const response = await Class.getClassroom(student, teacher, status, Host);

    if (classroom !== response) {
      //console.log(response);
      setStatusClasses(response);
    }
  }

  async function updateStatusClassroom(id) {
    let response = await Class.readClass(Host, id);
    //console.log(response.status);
    if (response.status === 1) {
      response = await Class.updateStatusClassroom(id, 2, Host);
      //console.log(response.message);
    } else if (response.status === 2) {
      response = await Class.updateStatusClassroom(id, 3, Host);
      //console.log(response.message);
    } else if (response.status === 3) {
      response = await Class.updateStatusClassroom(id, 4, Host);
      //console.log(response.message);
    } else if (response.status === 4) {
      response = await Class.updateStatusClassroom(id, 5, Host);
      //console.log(response.message);
    }
  }
  async function loadStatusClasses(status) {
    const response = await Class.getStatusClassroom(Host, user.id, status);
    if (statusClasses !== response) {
      await setStatusClasses(response);
    }
    //console.log(response);
    return response;
  }

  async function loadStatusClassesStudents(status) {
    const response = await loadStatusClasses(status);
    let studentList = await {list: []};
    await Promise.all(
      response.map(async (item) => {
        const student = await Student.getStudent(Host, item.student);
        studentList.list = await studentList.list.concat(student);
      }),
    );
    await stackStudents(studentList.list);
  }

  async function readClass(id) {
    const response = await Class.readClass(Host, id);
    const address = await Address.findAddress(response.cep);
    let responseClass = {
      id: response.role,
      status: response.status,
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

    setClassroom(responseClass);
  }

  async function getClass() {
    const response = await Class.getClass(Host, user);
    setClasses(response);
  }

  async function updateStatusClasses(id, status) {
    const response = await Class.updateStatus(id, status, Host);
    if (classroom !== response) {
      setClassroom(response);
    }
  }

  async function geoCode(cep) {
    const response = await GeoCode.geocode(cep);
    if (coordenates !== response) {
      //console.log(response.results[0].geometry.location);
      setCoordenates(response.results[0].geometry.location);
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
        getClassroom,
        updateStatusClassroom,
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
        geoCode,
        coordenates,
      }}>
      {children}
    </ClassroomContext.Provider>
  );
}
