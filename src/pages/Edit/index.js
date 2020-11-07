import React, {useContext, useState} from 'react';
import Theme from '../../../Theme';
import {Formik} from 'formik';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import RegField from '../../components/RegField';
import * as yup from 'yup';

import gradeResolver from '../../services/gradeResolver';

import {AuthContext} from '../../contexts/auth';

import {
  TextContainer,
  Container,
  InfoContainer,
  ButtonContainer,
} from './styles';

export default function Edit({navigation}) {
  const {user, student, updateStudent} = useContext(AuthContext);

  function handleEdit(values){
    console.log("to aki")
    console.log(values)
    updateStudent(values, user.id)
    navigation.navigate('Perfil')
  }

  let initials = { 
    name: ''/*user && user.firstName*/,
    surname: ''/*user && user.lastName*/,
    email: ''/*user && user.email*/,
    cellphone: ''/*student && student.cep*/,
    /*grade: '',
    school: '',
    cep: '',
    num: student && student.number.toString(),,
    details: '',
    description: '',
    special: false,*/
  };

  let Schema = yup.object().shape({
    name: yup
      .string('Nome deve ser um texto')
      .required('É necessário indicar um nome'),
    surname: yup
      .string('Sobrenome deve ser um texto')
      .required('É necessário indicar um sobrenome'),
    email: yup
      .string('Email deve ser um texto')
      .email('Email deve ter formato válido')
      .required('É necessário indicar um email'),
    cellphone: yup
      .string()
      .required('É necessário indicar um número de telefone')
      .min(11, 'Número de telefone inválido')
      .max(13, 'Número de telefone inválido'),
/*
    grade: yup.number().required('É necessário indicar uma série'),
    school: yup
      .string('Instituição deve ser um texto')
      .required('É necessário indicar uma instituição'),
    cpf: yup
      .string()
      .length(11, 'CPF deve ter 11 números')
      .matches(/^\d+$/, 'CPF deve ser um número')
      .required('É necessário indicar um CPF'),
    cep: yup
      .string()
      .length(8, 'CPF deve ter 8 números')
      .matches(/^\d+$/, 'CEP deve ser um número')
      .required('É necessário indicar um CEP'),
    num: yup
      .number('Número do endereço deve ser um numero')
      .required('É necessário indicar um número do endereço'),
    details: yup
      .string('Complemento deve ser um texto')
      .required('É necessário indicar o complemento'),
    description: yup.string().required('É necessário indicar uma descriação'),
    special: yup.boolean().required(),*/
  });

  return (
    <Theme>
      <Background1>

          <Formik
          initialValues={initials}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleEdit}
          validationSchema={Schema}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
          }) => ( <>     
              <Container>
            <InfoContainer>
              <TextContainer>
                <RegField placeholder={user && user.firstName} 
                          value={values.name}
                          onChangeText={handleChange('name')}
                />
                {errors.name && touched.name && (
                  <CustomText black small>
                    {errors.name}
                  </CustomText>
                )}
              </TextContainer>
              <TextContainer>
                <RegField placeholder={user && user.lastName} 
                          value={values.surname}
                          onChangeText={handleChange('surname')}
                />
              </TextContainer>
              <TextContainer>
                <RegField placeholder={user && user.email} 
                          value={values.email}
                          onChangeText={handleChange('email')}
                />
              </TextContainer>
              <TextContainer>
                <RegField placeholder={user && user.cellphone} 
                          value={values.cellphone}
                          onChangeText={handleChange('cellphone')}
                />
              </TextContainer>
              <TextContainer>
                <RegField placeholder={student && student.cep} />
              </TextContainer>
              <TextContainer>
                <RegField placeholder={student && student.number.toString()} />
              </TextContainer>
              <TextContainer>
                <RegField placeholder={student && student.details} />
              </TextContainer>
              <TextContainer>
                <RegField placeholder={student && student.cpf} />
              </TextContainer>
              <TextContainer>
                <RegField placeholder={student && student.description} />
              </TextContainer>
              <TextContainer>
                <RegField placeholder={student && student.institution} />
              </TextContainer>
              <TextContainer>
                <RegField placeholder={student && gradeResolver(student.grade)} />
              </TextContainer>
            </InfoContainer>       
             </Container>
        <ButtonContainer onPress={handleSubmit}>
          <CustomText white bigSmall>
            Salvar
          </CustomText>
        </ButtonContainer>
        </>
              )}
              
            </Formik>

      </Background1>
    </Theme>
  );
}