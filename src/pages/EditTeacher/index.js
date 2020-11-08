import React, {useContext, useState} from 'react';
import Theme from '../../../Theme';
import {Formik} from 'formik';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import RegField from '../../components/RegField';
import SeriePicker from '../../components/SeriePicker';
import * as yup from 'yup';

import {AuthContext} from '../../contexts/auth';

import {
  TextContainer,
  Container,
  InfoContainer,
  ButtonContainer,
} from './styles';

export default function EditTeacher({navigation}) {
  const {user, student, updateUser, teacher} = useContext(AuthContext);
  function handleEdit(values) {
    updateUser(values, user.id);
    navigation.navigate('PerfilProf2');
  }

  let initials = {
    name: ''/*user && user.firstName*/,
    surname: ''/*user && user.lastName*/,
    email: ''/*user && user.email*/,
    cellphone: ''/*student && student.cep*/,
    grade: '',
    school: '',
    cep: '',
    num: '',
    details: '',
    description: '',
    video: '',
    degree: '',
    bank: '',
    agency: '',
    account: '',
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
    grade: yup.number().required('É necessário indicar uma série'),
    school: yup
      .string('Instituição deve ser um texto')
      .required('É necessário indicar uma instituição'),
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
      .required('Você deve inserir um complemento'),
    description: yup
      .string('Descrição deve ser um texto')
      .required('Você deve inserir uma descrição'),
    video: yup.string(),
    degree: yup.string().required('É necessário indicar o diploma'),
    bank: yup.string().required('É necessário indicar o banco'),
    agency: yup.string().required('É necessário indicar a agência'),
    account: yup.string().required('É necessário indicar a conta'),
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
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <>
              <Container>
                <InfoContainer>
                  <TextContainer>
                    <RegField
                      placeholder={user && user.firstName}
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
                    <RegField
                      placeholder={user && user.lastName}
                      value={values.surname}
                      onChangeText={handleChange('surname')}
                    />
                    {errors.surname && touched.surname && (
                      <CustomText black small>
                        {errors.surname}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={user && user.email}
                      value={values.email}
                      onChangeText={handleChange('email')}
                    />
                    {errors.email && touched.email && (
                      <CustomText black small>
                        {errors.email}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={user && user.cellphone}
                      value={values.cellphone}
                      onChangeText={handleChange('cellphone')}
                    />
                    {errors.cellphone && (
                      <CustomText black small>
                        {errors.cellphone}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={student && student.cep}
                      value={values.cep}
                      onChangeText={handleChange('cep')}
                    />
                    {errors.cep && (
                      <CustomText black small>
                        {errors.cep}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={student && student.number.toString()}
                      value={values.num}
                      onChangeText={handleChange('num')}
                    />
                    {errors.num && (
                      <CustomText black small>
                        {errors.num}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={student && student.details}
                      value={values.details}
                      onChangeText={handleChange('details')}
                    />
                    {errors.details && (
                      <CustomText black small>
                        {errors.details}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={student && student.description}
                      value={values.description}
                      onChangeText={handleChange('description')}
                    />
                    {errors.description && (
                      <CustomText black small>
                        {errors.description}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={student && student.institution}
                      value={values.school}
                      onChangeText={handleChange('school')}
                    />
                    {errors.institution && (
                      <CustomText black small>
                        {errors.school}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <SeriePicker
                      value={values.grade}
                      onChange={(value) => setFieldValue('grade', value, false)}
                    />
                    {errors.grade && (
                      <CustomText black small>
                        {errors.grade}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={teacher && teacher.video}
                      value={values.video}
                      onChangeText={handleChange('video')}
                    />
                    {errors.video && (
                      <CustomText black small>
                        {errors.video}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={teacher && teacher.degree}
                      value={values.degree}
                      onChangeText={handleChange('degree')}
                    />
                    {errors.degree && (
                      <CustomText black small>
                        {errors.degree}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={teacher && teacher.bank}
                      value={values.bank}
                      onChangeText={handleChange('bank')}
                    />
                    {errors.bank && (
                      <CustomText black small>
                        {errors.bank}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={teacher && teacher.agency}
                      value={values.agency}
                      onChangeText={handleChange('agency')}
                    />
                    {errors.agency && (
                      <CustomText black small>
                        {errors.agency}
                      </CustomText>
                    )}
                  </TextContainer>
                  <TextContainer>
                    <RegField
                      placeholder={teacher && teacher.account}
                      value={values.account}
                      onChangeText={handleChange('account')}
                    />
                    {errors.account && (
                      <CustomText black small>
                        {errors.account}
                      </CustomText>
                    )}
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
