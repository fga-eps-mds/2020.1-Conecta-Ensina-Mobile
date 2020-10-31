import React from 'react';
import Theme from '../../../Theme';
import {Formik} from 'formik';
import * as yup from 'yup';
import {TextInputMask} from 'react-native';
import {Alert} from 'react-native';

import {
  UserContatiner,
  Icon,
  RegsContainer,
  ButtonRegistrar,
  ContainerRowFlex,
  Container,
  DateContainer,
} from './styles';

import Background3 from '../../components/Background3';
import RegFieldBig from '../../components/RegFieldBig';
import RegFieldMedium from '../../components/RegFieldMedium';
import RegFieldSmall from '../../components/RegFieldSmall';
import CustomText from '../../components/CustomText';
import SwitchSpecial from '../../components/SwitchSpecial';
import SeriePicker from '../../components/SeriePicker';

export default function RegistroProfessor({navigation}) {
  const RegistroAlert = () => {
    Alert.alert(
      'Registro',
      //body
      'Registro Concluido com sucesso',
      [
        {
          text: 'Finalizar',
          onPress: () => navigation.navigate('Login'),
        },
      ],
      {cancelable: false},
    );
  };

  const submitHandler = async (values, {setStatus, isSubmitting}) => {
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
      'http://192.168.0.8:3333/api/teacher/create',
      settings,
    );
    try {
      const data = await fetchResponse.json();
      console.log('Success:', data);
      if (data.message) {
        if (data.message === 'Professor criado com sucesso!') {
          ok = true;
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
      RegistroAlert();
    }
  };

  return (
    <Theme>
      <Background3 navigation={navigation} student={false}>
        <UserContatiner>
          <Icon source={require('../../assets/user_white.png')} />
        </UserContatiner>
        <Formik
          initialValues={{
            name: '',
            surname: '',
            email: '',
            password: '',
            cellphone: '',
            birthdate: '',
            grade: '',
            school: '',
            cpf: '',
            cep: '',
            num: '',
            details: '',
            description: '',
            special: false,
            photo: '',
            video: '',
            graduation_area: '',
            degree: '',
            bank: '',
            agency: '',
            account: '',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={submitHandler}
          validationSchema={yup.object().shape({
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
            password: yup
              .string('Senha inválida')
              .min(8, 'Senha deve ter 8 caracteres')
              .required('É necessário indicar uma senha'),
            cellphone: yup
              .string()
              .required('É necessário indicar um número de telefone')
              .min(11, 'Número de telefone inválido')
              .max(13, 'Número de telefone inválido'),
            birthdate: yup
              .date('Data inválida')
              .required('É necessário indicar uma data de nascimentos'),
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
              .required('Você deve inserir um complemento'),
            description: yup
              .string('Descrição deve ser um texto')
              .required('Você deve inserir uma descrição'),
            video: yup.string(),
            special: yup.boolean().required(),
            graduation_area: yup
              .string()
              .required('É necessário indicar a área e graduação'),
            degree: yup.string().required('É necessário indicar o diploma'),
            bank: yup.string().required('É necessário indicar o banco'),
            agency: yup.string().required('É necessário indicar a agência'),
            account: yup.string().required('É necessário indicar a conta'),
          })}>
          {({
            handleChange,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            status,
            touched,
          }) => (
            <Container>
              <RegsContainer>
                <RegFieldBig
                  placeholder="Nome"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                {errors.name && touched.name && (
                  <CustomText black small>
                    {errors.name}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Sobrenome"
                  value={values.surname}
                  onChangeText={handleChange('surname')}
                />
                {errors.surname && touched.surname && (
                  <CustomText black small>
                    {errors.surname}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Email"
                  autoCapitalize="none"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                {!!status && status.email && touched.email && (
                  <CustomText black small>
                    {status.email}
                  </CustomText>
                )}
                {errors.email && touched.email && (
                  <CustomText black small>
                    {errors.email}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Senha"
                  autoCapitalize="none"
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
                {errors.password && (
                  <CustomText black small>
                    {errors.password}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Número de celular"
                  autoCapitalize="none"
                  value={values.cellphone}
                  onChangeText={handleChange('cellphone')}
                />
                {errors.cellphone && (
                  <CustomText black small>
                    {errors.cellphone}
                  </CustomText>
                )}
                <DateContainer>
                  <TextInputMask
                    value={values.birthdate}
                    onChangeText={handleChange('birthdate')}
                    type={'datetime'}
                    options={{
                      format: 'YYYY-MM-DD',
                    }}
                    placeholder="Data de nascimento"
                    placeholderTextColor="#F6F6F6"
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
                      flex: 1,
                      textAlign: 'center',
                    }}
                  />
                </DateContainer>
                <ContainerRowFlex>
                  <SeriePicker
                    value={values.grade}
                    onChange={(value) => setFieldValue('grade', value, false)}
                  />
                  <RegFieldMedium
                    placeholder="Instituição"
                    autoCapitalize="none"
                    value={values.school}
                    onChangeText={handleChange('school')}
                  />
                </ContainerRowFlex>
                {errors.grade && (
                  <CustomText black small>
                    {errors.grade}
                  </CustomText>
                )}
                {errors.school && (
                  <CustomText black small>
                    {errors.school}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="CPF"
                  value={values.cpf}
                  onChangeText={handleChange('cpf')}
                />
                {!!status && status.cpf && (
                  <CustomText black small>
                    {status.cpf}
                  </CustomText>
                )}
                {errors.cpf && (
                  <CustomText black small>
                    {errors.cpf}
                  </CustomText>
                )}
                <ContainerRowFlex>
                  <RegFieldMedium
                    placeholder="CEP"
                    value={values.cep}
                    onChangeText={handleChange('cep')}
                  />
                  <RegFieldSmall
                    placeholder="Nº"
                    value={values.num}
                    onChangeText={handleChange('num')}
                  />
                </ContainerRowFlex>
                {errors.cep && (
                  <CustomText black small>
                    {errors.cep}
                  </CustomText>
                )}
                {errors.num && (
                  <CustomText black small>
                    {errors.num}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Complemento"
                  value={values.details}
                  onChangeText={handleChange('details')}
                />
                {errors.details && (
                  <CustomText black small>
                    {errors.details}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Descrição"
                  autoCapitalize="none"
                  value={values.description}
                  onChangeText={handleChange('description')}
                />
                {errors.description && (
                  <CustomText black small>
                    {errors.description}
                  </CustomText>
                )}
                <SwitchSpecial
                  value={values.special}
                  text="Necessidades especiais?"
                  onChange={(value) => setFieldValue('special', value, false)}
                />
                {errors.special && (
                  <CustomText black small>
                    {errors.special}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Link para Vídeo"
                  autoCapitalize="none"
                  value={values.video}
                  onChangeText={handleChange('video')}
                />
                {errors.video && (
                  <CustomText black small>
                    {errors.video}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Área de graduação"
                  autoCapitalize="none"
                  value={values.graduation_area}
                  onChangeText={handleChange('graduation_area')}
                />
                {errors.graduation_area && (
                  <CustomText black small>
                    {errors.graduation_area}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Diploma"
                  autoCapitalize="none"
                  value={values.degree}
                  onChangeText={handleChange('degree')}
                />
                {errors.degree && (
                  <CustomText black small>
                    {errors.degree}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Banco"
                  autoCapitalize="none"
                  value={values.bank}
                  onChangeText={handleChange('bank')}
                />
                {errors.bank && (
                  <CustomText black small>
                    {errors.bank}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Agência"
                  autoCapitalize="none"
                  value={values.agency}
                  onChangeText={handleChange('agency')}
                />
                {errors.agecy && (
                  <CustomText black small>
                    {errors.agency}
                  </CustomText>
                )}
                <RegFieldBig
                  placeholder="Conta"
                  autoCapitalize="none"
                  value={values.account}
                  onChangeText={handleChange('account')}
                />
                {errors.account && (
                  <CustomText black small>
                    {errors.account}
                  </CustomText>
                )}
              </RegsContainer>
              <ButtonRegistrar onPress={handleSubmit} testID="submit" />
            </Container>
          )}
        </Formik>
      </Background3>
    </Theme>
  );
}
