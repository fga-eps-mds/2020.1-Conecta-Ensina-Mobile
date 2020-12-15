import React, {createContext, useState, useContext, useEffect} from 'react';
import {AuthContext} from './auth';
import * as Admin from '../services/admin';

export const AdmContext = createContext({});

function AdmProvider({children}) {
  const [pendingUsers, setPendingUsers] = useState(null);
  const [reportedUsers, setReportedUsers] = useState(null);
  const [students, setStudents] = useState(null);

  const {Host, user} = useContext(AuthContext);

  async function getTeacherList() {
    const response = await Admin.getTeacherList(Host);
    setPendingUsers(response);
    setReportedUsers(null);
  }

  async function statusUpdate(id, status) {
    const response = await Admin.statusUpdate(Host, user, id, status);
  }

  async function getProfessoUser(id) {
    const response = await Admin.getProfessoUser(Host, id);
    console.log(response);
    setStudents(response);
  }

  async function getReportedUsers() {
    const response = await Admin.getReportedUsers(Host);
    console.log(response);
    setReportedUsers(response);
    setPendingUsers(null);
  }

  return (
    <AdmContext.Provider
      value={{
        reportedUsers,
        pendingUsers,
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
