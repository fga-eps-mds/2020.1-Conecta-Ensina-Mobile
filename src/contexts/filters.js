import React, {createContext, useState, useContext} from 'react';
import {AuthContext} from './auth';
//import * as Subj from '../services/subject';

export const FiltersContext = createContext({});

export default function FiltersProvider({children}) {
  const [filter, setFilter] = useState({
    subject: null,
    dtClass: null,
    duration: null,
    classType: null,
  });
  const {Host} = useContext(AuthContext);
  console.log(filter);

  function setSubjectFilter(subject) {
    let filters = {
      subject: subject,
      dtClass: filter.dtClass,
      duration: filter.duration,
      classType: filter.classType,
    };
    setFilter(filters);
  }

  function setDtClass(date) {
    let filters = {
      subject: filter.subject,
      dtClass: date,
      duration: filter.duration,
      classType: filter.classType,
    };
    setFilter(filters);
  }

  function setDurationFilters(duration) {
    let filters = {
      subject: filter.subject,
      dtClass: filter.dtClass,
      duration: duration,
      classType: filter.classType,
    };
    setFilter(filters);
  }

  function setClassType(type) {
    let filters = {
      subject: filter.subject,
      dtClass: filter.dtClass,
      duration: filter.duration,
      classType: type,
    };
    setFilter(filters);
  }

  return (
    <FiltersContext.Provider
      value={{
        filter,
        setSubjectFilter,
        setDtClass,
        setDurationFilters,
        setClassType,
      }}>
      {children}
    </FiltersContext.Provider>
  );
}
