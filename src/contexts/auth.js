import React, {createContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [typeUser, setTypeUser] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [student, setStudent] = useState(null);

  const Host = 'http://192.168.0.157:3333';

  useEffect(() => {console.log(user)}, [user])

  async function signIn(email, password) {
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
    const fetchResponse1 = await fetch(`${Host}/api/user/login`, settings);
    try {
      const data = await fetchResponse1.json();
      console.log('Success:', data);
      if (data.message) {
        if (data.message === 'Login efetuado com sucesso!') {
          console.log('login efetuado');
          renderData(data.id, data.role);
          if (data.role === 1) {
            setTypeUser('Adm');
            console.log('Adm');
          } else if (data.role === 2) {
            setTypeUser('Professor');
            console.log('Professor');
          } else {
            setTypeUser('Aluno');
            console.log('aluno');
          }
          setUser(data)
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  } //close signIn function

  async function registerAluno(values, {setStatus}) {
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
    const fetchResponse = await fetch(`${Host}/api/student/create`, settings);
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
            role: data.data.user.role,
            cellphone: data.data.student.cellphone,
          };
          setUser(usuario);

          let estudante = {
            birthdate: data.data.student.birthdate,
            grade: data.data.student.grade,
            institution: data.data.student.school,
            cpf: data.data.student.cpf,
            cep: data.data.student.cep,
            number: data.data.student.number,
            details: data.data.student.details,
            description: data.data.student.description,
            special: data.data.student.special,
          };
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
  } //close registerAluno fuction

  async function registerProf(values, {setStatus}) {
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
        number: values.number,
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
    const fetchResponse = await fetch(`${Host}/api/teacher/create`, settings);
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
            role: data.data.user.role,
            cellphone: data.data.student.cellphone,
          };
          setUser(usuario);

          let estudante = {
            birthdate: data.data.student.birthdate,
            grade: data.data.student.grade,
            institution: data.data.student.school,
            cpf: data.data.student.cpf,
            cep: data.data.student.cep,
            number: data.data.student.number,
            details: data.data.student.details,
            description: data.data.student.description,
            special: data.data.student.special,
          };
          setStudent(estudante);

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
  } //close registerProf function

  const RegistroAlert = ({role}) => {
    Alert.alert(
      'Registro',
      'Registro Concluido com sucesso',
      [
        {
          text: 'Finalizar',
          onPress: () => {
            if (role === 2) {
              setTypeUser('Professor');
            } else {
              setTypeUser('Aluno');
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  async function renderData(id, role) {
    var ok = false;
    try {
      let response = await fetch(`${Host}/api/user/` + id);
      const data = await response.json();
      let usuario = {
        id: id,
        firstName: data.data.user.firstName,
        lastName: data.data.user.lastName,
        email: data.data.user.email,
        password: data.data.user.password,
        role: data.data.user.role,
        cellphone: data.data.user.cellphone,
      };
      if (role === 2 || role === 3) {
        ok = true;
      }
      setUser(usuario);
    } catch (error) {
      console.error(error);
    }
    if (ok) {
      try {
        let response = await fetch(`${Host}/api/student/` + id);
        const data = await response.json();
        let estudante = {
          birthdate: data.data.student.birthdate,
          grade: data.data.student.grade,
          institution: data.data.student.school,
          cpf: data.data.student.cpf,
          cep: data.data.student.cep,
          number: data.data.student.number,
          details: data.data.student.details,
          description: data.data.student.description,
          special: data.data.student.special,
        };
        setStudent(estudante);
      } catch (error) {
        console.error(error);
      }
      if (role === 2) {
        try {
          let response = await fetch(`${Host}/api/teacher/` + id);
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
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed:!!user,
        user,
        teacher,
        student,
        typeUser,
        Host,
        signIn,
        registerAluno,
        registerProf,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
