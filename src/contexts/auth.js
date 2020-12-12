import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {HOST} from '@env';

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [typeUser, setTypeUser] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  const Host = `${HOST}`;

  useEffect(() => {
    async function loadStorage() {
      const storageTypeUser = await AsyncStorage.getItem('Auth_typeUser');
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if (storageTypeUser) {
        if (JSON.parse(storageTypeUser) === 1) {
          setTypeUser('Adm');
          setLoading(false);
        } else if (JSON.parse(storageTypeUser) === 2) {
          setTypeUser('Professor');
          setLoading(false);
        } else {
          setTypeUser('Aluno');
          setLoading(false);
        }
      }
      if (storageUser) {
        const dataUser = JSON.parse(storageUser);
        let usuario = {
          id: dataUser.id,
          firstName: dataUser.firstName,
          lastName: dataUser.lastName,
          email: dataUser.email,
          password: dataUser.password,
          role: dataUser.role,
          cellphone: dataUser.cellphone,
        };
        setUser(usuario);
        setLoading(false);
        if (dataUser.role == 2 || dataUser.role == 3) {
          const storageStudent = await AsyncStorage.getItem('Auth_student');
          if (storageStudent) {
            const dataStudent = JSON.parse(storageStudent);
            let estudante = {
              birthdate: dataStudent.birthdate,
              grade: dataStudent.grade,
              institution: dataStudent.school,
              cpf: dataStudent.cpf,
              cep: dataStudent.cep,
              number: dataStudent.number,
              details: dataStudent.details,
              description: dataStudent.description,
              special: dataStudent.special,
            };
            setStudent(estudante);
            setLoading(false);
          }
          if (dataUser.role == 2) {
            const storageTeacher = await AsyncStorage.getItem('Auth_teacher');
            if (storageTeacher) {
              const dataTeacher = JSON.parse(storageTeacher);
              let professor = {
                photo: dataTeacher.photo,
                video: dataTeacher.video,
                graduation_area: dataTeacher.graduation_area,
                degree: dataTeacher.degree,
                bank: dataTeacher.bank,
                agency: dataTeacher.agency,
                account: dataTeacher.account,
              };
              setTeacher(professor);
              setLoading(false);
            }
          }
        }
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

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
      console.log('Success');
      if (data.message) {
        if (data.message === 'Login efetuado com sucesso!') {
          console.log('login efetuado');
          storageTypeUser(data.role);
          renderData(data.id, data.role, password);
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
          setUser(data);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  } //close signIn function

  async function registerAluno(values, {setStatus}) {
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
      console.log('Success');
      if (data.message) {
        if (data.message === 'Estudante criado com sucesso!') {
          ok = true;

          renderData(
            data.data.user.id,
            data.data.user.role,
            data.data.user.password,
          );
          setTypeUser('Aluno');
          storageTypeUser(data.data.user.role);
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
    var ok = false;
    console.log(
      'firstName: ' +
        values.name +
        '\n' +
        'lastName: ' +
        values.surname +
        '\n' +
        'email: ' +
        values.email +
        '\n' +
        'password: ' +
        values.password +
        '\n' +
        'cellphone: ' +
        values.cellphone +
        '\n' +
        'birthdate: ' +
        values.birthdate +
        '\n' +
        'grade: ' +
        values.grade +
        '\n' +
        'institution: ' +
        values.school +
        '\n' +
        'cpf: ' +
        values.cpf +
        '\n' +
        'cep: ' +
        values.cep +
        '\n' +
        'number: ' +
        values.num +
        '\n' +
        'details: ' +
        values.details +
        '\n' +
        'description: ' +
        values.description +
        '\n' +
        'special: ' +
        values.special +
        '\n' +
        'photo: ' +
        values.photo +
        '\n' +
        'video: ' +
        values.video +
        '\n' +
        'graduation_area: ' +
        values.graduation_area +
        '\n' +
        'degree: ' +
        values.degree +
        '\n' +
        'bank: ' +
        values.bank +
        '\n' +
        'agency: ' +
        values.agency +
        '\n' +
        'account: ' +
        values.account +
        '\n',
    );
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

    const fetchResponse = await fetch(`${Host}/api/teacher/create`, settings);
    try {
      const data = await fetchResponse.json();
      console.log('Success');
      if (data.message) {
        if (data.message === 'Professor criado com sucesso!') {
          ok = true;
          renderData(
            data.data.user.id,
            data.data.user.role,
            data.data.user.password,
          );
          setTypeUser('Professor');
          storageTypeUser(data.data.user.role);
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

  async function renderData(id, role, password) {
    var ok = false;
    try {
      let response = await fetch(`${Host}/api/user/` + id);
      const data = await response.json();
      let usuario = {
        id: id,
        firstName: data.data.user.firstName,
        lastName: data.data.user.lastName,
        email: data.data.user.email,
        password: password,
        role: data.data.user.role,
        cellphone: data.data.user.cellphone,
      };
      if (role === 2 || role === 3) {
        ok = true;
      }
      storageUser(usuario);
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
          institution: data.data.student.institution,
          cpf: data.data.student.cpf,
          cep: data.data.student.cep,
          number: data.data.student.number,
          details: data.data.student.details,
          description: data.data.student.description,
          special: data.data.student.special,
        };
        setStudent(estudante);
        storageStudent(estudante);
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
          storageTeacher(professor);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  async function updateUser(values, id) {
    const settings1 = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: values.name,
        lastName: values.surname,
        email: values.email,
        cellphone: values.cellphone,
        password: user.password,
      }),
    };
    const fetchResponse1 = await fetch(`${Host}/api/user/${id}`, settings1);

    try {
      const data = await fetchResponse1.json();
      console.log('Success');
    } catch (error) {
      console.error('Error:', error);
    }
    if (user.role === 2 || user.role === 3) {
      const settings2 = {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agentRole: user.role,
          birthdate: student.birthdate,
          grade: values.grade,
          institution: values.school,
          cpf: student.cpf,
          cep: values.cep,
          number: values.num,
          details: values.details,
          description: values.description,
          special: student.special,
        }),
      };
      const fetchResponse2 = await fetch(
        `${Host}/api/student/${id}`,
        settings2,
      );
      try {
        const data2 = await fetchResponse2.json();
        console.log('Success');
      } catch (error) {
        console.error('Error:', error);
      }
      if (user.role === 2) {
        const settings3 = {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            agentRole: user.role,
            video: values.video,
            graduation_area: teacher.graduation_area,
            degree: values.degree,
            bank: values.bank,
            agency: values.agency,
            account: values.account,
          }),
        };
        const fetchResponse3 = await fetch(
          `${Host}/api/teacher/${id}`,
          settings3,
        );
        try {
          const data3 = await fetchResponse3.json();
          console.log('Success');
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
    renderData(user.id, user.role, user.password);
  }

  async function storageTypeUser(data) {
    await AsyncStorage.setItem('Auth_typeUser', JSON.stringify(data));
  }

  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  async function storageStudent(data) {
    await AsyncStorage.setItem('Auth_student', JSON.stringify(data));
  }

  async function storageTeacher(data) {
    await AsyncStorage.setItem('Auth_teacher', JSON.stringify(data));
  }

  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser(null);
      setTypeUser(null);
      setStudent(null);
      setTeacher(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        teacher,
        student,
        typeUser,
        Host,
        signIn,
        registerAluno,
        registerProf,
        updateUser,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
