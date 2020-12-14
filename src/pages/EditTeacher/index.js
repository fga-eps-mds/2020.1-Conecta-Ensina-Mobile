import React, {useContext, useState} from 'react';
import Theme from '../../../Theme';
import {Formik} from 'formik';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import RegField from '../../components/RegField';
import EditField from '../../components/EditField';
import GeneralPicker from '../../components/GeneralPicker';
import * as yup from 'yup';

import {AuthContext} from '../../contexts/auth';

import {
  TextContainer,
  Container,
  InfoContainer,
  ButtonContainer,
  ContainerBotao,
} from './styles';

export default function EditTeacher({navigation}) {
  const {user, student, updateUser, teacher} = useContext(AuthContext);
  function handleEdit(values) {
    updateUser(values, user.id);
    navigation.navigate('TeacherProfile2');
  }
  let info;
  let initials = {
    name: user && user.firstName,
    surname: user && user.lastName,
    email: user && user.email,
    cellphone: user && user.cellphone,
    grade: student && student.grade,
    school: student && student.institution,
    cep: student && student.cep,
    num: student && student.number,
    details: student && student.details ? student.details : '',
    description: student && student.description ? student.description : '',
    video: teacher && teacher.video ? teacher.video : '',
    degree: teacher && teacher.degree ? teacher.degree : '',
    bank: teacher && teacher.bank ? teacher.bank : '',
    agency: teacher && teacher.agency ? teacher.agency : '',
    account: teacher && teacher.account ? teacher.account : '',
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
                  {
                    ((info = [
                      {
                        field: 'Nome',
                        value: values.name,
                        change: 'name',
                        error: errors && errors.name,
                      },
                      {
                        field: 'Sobrenome',
                        value: values.surname,
                        change: 'surname',
                        error: errors && errors.surname,
                      },
                      {
                        field: 'Email',
                        value: values.email,
                        change: 'email',
                        error: errors && errors.email,
                      },
                      {
                        field: 'Celular',
                        value: values.cellphone,
                        change: 'cellphone',
                        error: errors && errors.cellphone,
                      },
                      {
                        field: 'CEP',
                        value: values.cep,
                        change: 'cep',
                        error: errors && errors.cep,
                      },
                      {
                        field: 'Número do endereço',
                        value: values.num,
                        change: 'num',
                        error: errors && errors.num,
                        placeholder: values.num.toString(),
                      },
                      {
                        field: 'Complemento do endereço',
                        value: values.details,
                        change: 'details',
                        error: errors && errors.details,
                      },
                      {
                        field: 'Descrição',
                        value: values.description,
                        change: 'description',
                        error: errors && errors.description,
                      },
                      {
                        field: 'Instituição',
                        value: values.institution,
                        change: 'institution',
                        error: errors && errors.institution,
                      },
                      {
                        field: 'Video',
                        value: values.video,
                        change: 'video',
                        error: errors && errors.video,
                      },
                      {
                        field: 'Diploma',
                        value: values.degree,
                        change: 'degree',
                        error: errors && errors.degree,
                      },
                      {
                        field: 'Banco',
                        value: values.bank,
                        change: 'bank',
                        error: errors && errors.bank,
                      },
                      {
                        field: 'Agência',
                        value: values.agency,
                        change: 'agency',
                        error: errors && errors.agency,
                      },
                      {
                        field: 'Conta',
                        value: values.account,
                        change: 'account',
                        error: errors && errors.account,
                      },
                    ]),
                    info.map((item, index) => {
                      return (
                        <EditField
                          key={index}
                          field={item.field}
                          placeholder={item.placeholder}
                          value={item.value}
                          onChangeText={handleChange(item.change)}
                          errors={item.error}
                        />
                      );
                    }))
                  }
                  {console.log(values)}
                  <CustomText black medium>
                    Série
                  </CustomText>
                  <TextContainer>
                    <GeneralPicker
                      grade
                      value={values.grade}
                      onChange={(value) => setFieldValue('grade', value, false)}
                    />
                    {errors.grade && (
                      <CustomText black small>
                        {errors.grade}
                      </CustomText>
                    )}
                  </TextContainer>
                </InfoContainer>
              </Container>
              <ContainerBotao>
                <ButtonContainer onPress={handleSubmit}>
                  <CustomText white bigSmall>
                    Salvar
                  </CustomText>
                </ButtonContainer>
              </ContainerBotao>
            </>
          )}
        </Formik>
      </Background1>
    </Theme>
  );
}
