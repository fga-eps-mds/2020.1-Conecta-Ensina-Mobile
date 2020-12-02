import React, {createContext, useContext} from 'react';
import {AuthContext} from './auth';
import {ClassroomContext} from './classroom';
import * as Rate from '../services/rate';

export const RateContext = createContext({});

export default function UserProvider({children}) {
  const {statusClass} = useContext(ClassroomContext);
  const {Host} = useContext(AuthContext);

  async function createRate(comments, rate_creator, rate) {
    const response = await Rate.createRate(
      statusClass.student,
      statusClass.teacher,
      statusClass.id,
      comments,
      rate,
      rate_creator,
      Host,
    );
    console.log(response);
  }

  return (
    <RateContext.Provider value={{createRate}}>{children}</RateContext.Provider>
  );
}
