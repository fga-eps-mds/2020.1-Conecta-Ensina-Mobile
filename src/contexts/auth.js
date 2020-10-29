import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [typeUser, setTypeUser] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [student, setStudent] = useState(null);

  const Host = "http://192.168.175.33:3333"

  async function signIn(email, password){
      const settings = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };
      const fetchResponse1 = await fetch(
        `${Host}/api/user/login`,
        settings,
      );
      try {
        const data = await fetchResponse1.json();
        console.log('Success:', data);
        if (data.message) {
          if (data.message === 'Login efetuado com sucesso!') {
            console.log("login efetuado")
            let usuario = {
              firstName: data.firstName,
              id: data.id,
            }
            setUser(usuario)
          if (data.role === 1){ 
              setTypeUser('Adm')
              console.log("Adm")
          } else if(data.role === 2){
              setTypeUser('Professor')
              console.log("Professor")
            } else{
              setTypeUser('Aluno')
              console.log("aluno")
            }
          }
        }
      }catch(error){
        console.error('Error:', error);
      }
  }

  async function registerAluno (values, {setStatus}) {
    console.log(values);
    var ok = false;
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: values.name,
        lastName: values.surname,
        email: values.email,
        password: values.password,
        cellphone: values.cellphone,
        birthdate: values.birthdate,
        grade: values.grade,
        institution: values.school,
        cpf: values.cpf,
        cep: values.cep,
        number: values.num,
        details: values.details,
        description: values.description,
        special: values.special,
      }),
    };
    const fetchResponse = await fetch(
      `${Host}/api/student/create`,
      settings,
    );
    try {
      const data = await fetchResponse.json();
      console.log('Success:', data);
      if (data.message) {
        if (data.message === 'Estudante criado com sucesso!') {
          ok = true;
          let usuario = {
            id: data.data.user.id,
            firstName: data.data.user.firstName,
            lastName: data.data.user.lastName,
            email: data.data.user.email,
            password: data.data.user.password,
            role: data.data.user.role
          }
          setUser(usuario);

          let estudante = {
            cellphone: data.data.student.cellphone,
            birthdate: data.data.student.birthdate,
            grade: data.data.student.grade,
            institution: data.data.student.school,
            cpf: data.data.student.cpf,
            cep: data.data.student.cep,
            number: data.data.student.num,
            details: data.data.student.details,
            description: data.data.student.description,
            special: data.data.student.special,
          }
          setStudent(estudante);

        } else if (data.message.name) {
          if (
            data.message.name === 'SequelizeUniqueConstraintError' &&
            data.message.fields.email
          ) {
            setStatus({email: 'Email já foi registrado'});
          } else if (
            data.message.name === 'SequelizeUniqueConstraintError' &&
            data.message.fields.cpf
          ) {
            setStatus({cpf: 'CPF já foi registrado'});
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    if (ok) {
      RegistroAlert(3);
    }
  };

  async function registerProf(values, { setStatus }){
    console.log(values);
    var ok = false;
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: values.name,
        lastName: values.surname,
        email: values.email,
        password: values.password,
        cellphone: values.cellphone,
        birthdate: values.birthdate,
        grade: values.grade,
        institution: values.school,
        cpf: values.cpf,
        cep: values.cep,
        number: values.num,
        details: values.details,
        description: values.description,
        special: values.special,
        photo: values.photo,
        video: values.video,
        graduation_area: values.graduation_area,
        degree: values.degree,
        bank: values.bank,
        agency: values.agency,
        account: values.account,
      }),
    };
    const fetchResponse = await fetch(
      `${Host}/api/teacher/create`,
      settings,
    );
    try {
      const data = await fetchResponse.json();
      console.log('Success:', data);
      if (data.message) {
        if (data.message === 'Professor criado com sucesso!') {
          ok = true;
          let usuario = {
            id: data.data.user.id,
            firstName: data.data.user.firstName,
            lastName: data.data.user.lastName,
            email: data.data.user.email,
            password: data.data.user.password,
            role: data.data.user.role
          }
          setUser(usuario);

          let estudante = {
            cellphone: data.data.student.cellphone,
            birthdate: data.data.student.birthdate,
            grade: data.data.student.grade,
            institution: data.data.student.school,
            cpf: data.data.student.cpf,
            cep: data.data.student.cep,
            number: data.data.student.num,
            details: data.data.student.details,
            description: data.data.student.description,
            special: data.data.student.special,
          }
          setStudent(estudante);

          let professor = {
            photo: data.data.teacher.photo,
            video: data.data.teacher.video,
            graduation_area: data.data.teacher.graduation_area,
            degree: data.data.teacher.degree,
            bank: data.data.teacher.bank,
            agency: data.data.teacher.agency,
            account: data.data.teacher.account,
          }
          setTeacher(professor);

        } else if (data.message.name) {
          if (
            data.message.name === 'SequelizeUniqueConstraintError' &&
            data.message.fields.email
          ) {
            setStatus({email: 'Email já foi registrado'});
          } else if (
            data.message.name === 'SequelizeUniqueConstraintError' &&
            data.message.fields.cpf
          ) {
            setStatus({cpf: 'CPF já foi registrado'});
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
    if (ok) {
      RegistroAlert(2);
    }
  };

  const RegistroAlert = ({ role }) => {
    Alert.alert(
      'Registro',
      'Registro Concluido com sucesso',
      [
        {
          text: 'Finalizar',
          onPress: () => {
            if(role === 2) setTypeUser('Professor')
            else setTypeUser('Aluno')
          },
        },
      ],
      {cancelable: false},
    );
  };

  return(
    <AuthContext.Provider value={{signed: true/*(!! user)*/, user, teacher, student, typeUser, signIn, registerAluno, registerProf}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
