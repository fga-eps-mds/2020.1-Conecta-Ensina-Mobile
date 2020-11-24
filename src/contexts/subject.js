import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
import * as Subj from '../services/subject';

export const SubjectContext = createContext({});

export default function SubjectProvider({children}) {
  const [subject, setSubject] = useState({});
  const {Host} = useContext(AuthContext);

  async function loadSubjects() {
    const response = await Subj.getAllSubjects(Host);
    if (subject !== response) {
      setSubject(response);
    }
  }

  return (
    <SubjectContext.Provider value={{subject, loadSubjects}}>
      {children}
    </SubjectContext.Provider>
  );
}
