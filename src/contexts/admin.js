import React, {createContext, useState, useContext, useEffect} from 'react';
import {AuthContext} from './auth';

export const AdmContext = createContext({});

function AdmProvider({children}) {
  const [students, setStudents] = useState(null);
  const [userDB, setUserDB] = useState(null);
  const [teacher, setTeacher] = useState(null);

  const {Host, user} = useContext(AuthContext);

  async function getProfessorList() {
    const fetchResponse = await fetch(`${Host}/api/student/status/0`);

    console.log(Host);

    try {
      const data = await fetchResponse.json();
      setStudents(data.data.student);
    } catch (error) {
      return error;
    }
  }

  async function statusUpdate(id) {
    const settings = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 1,
        agentRole: user.role,
      }),
    };
    const fetchResponse1 = await fetch(
      `${Host}/api/student/status/${id}`,
      settings,
    );
    try {
      const data = await fetchResponse1.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function getProfessoUser(id) {
    const fetchResponse = await fetch(`${Host}/api/user/${id}`);
    try {
      const data = await fetchResponse.json();
      let usuario = {
        id: id,
        firstName: data.data.user.firstName,
        lastName: data.data.user.lastName,
        email: data.data.user.email,
        password: data.data.user.password,
        role: data.data.user.role,
        cellphone: data.data.user.cellphone,
      };
      setUserDB(usuario);
      try {
        let response = await fetch(`${Host}/api/teacher/${id}`);
        const data = await response.json();
        let professor = {
          photo: data.data.teacher.photo,
          video: data.data.teacher.video,
          graduation_area: data.data.teacher.graduation_area,
          degree: data.data.teacher.degree,
          bank: data.data.teacher.bank,
          agency: data.data.teacher.agency,
          account: data.data.teacher.account,
        };
        setTeacher(professor);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <AdmContext.Provider
      value={{
        students,
        userDB,
        teacher,
        getProfessorList,
        statusUpdate,
        getProfessoUser,
      }}>
      {children}
    </AdmContext.Provider>
  );
}

export default AdmProvider;
