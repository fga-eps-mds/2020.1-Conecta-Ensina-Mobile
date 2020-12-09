import React, {createContext, useState, useContext, useEffect} from 'react';
import {AuthContext} from './auth';
import * as Admin from '../services/admin';

export const AdmContext = createContext({});

function AdmProvider({children}) {
  const [usersAdmin, setUsersAdmin] = useState(null);
  const [students, setStudents] = useState(null);

  const {Host, user} = useContext(AuthContext);

  async function getTeacherList() {
    const response = await Admin.getTeacherList(Host);
    setStudents(response);
  }

  async function statusUpdate(id) {
    const response = await Admin.statusUpdate(Host, user, id);
  }

  async function getProfessoUser(id) {
    const response = await Admin.getProfessoUser(Host, id);
    setUsersAdmin(response);
  }

  async function getReportedUsers() {
    const response = await Admin.getReportedUsers(Host);

    setStudents(response);
  }

  return (
    <AdmContext.Provider
      value={{
        usersAdmin,
        students,
        getTeacherList,
        statusUpdate,
        getProfessoUser,
        getReportedUsers,
      }}>
      {children}
    </AdmContext.Provider>
  );
}

export default AdmProvider;
