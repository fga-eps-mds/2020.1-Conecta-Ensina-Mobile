import React,{useContext} from 'react';
import AlunoRoutes from './aluno.routes';
import ProfRoutes from './prof.routes';
import AuthRoutes from './auth.routes';
import {AuthContext} from '../contexts/auth'


function Routes(){
  const {typeUser} = useContext(AuthContext);

  if(typeUser == 'Professor'){
    return <ProfRoutes/>;  
  }
  else if(typeUser == 'Aluno'){
    return <AlunoRoutes/>;
  }
  else{
    return <AuthRoutes/>
  }
}

export default Routes;