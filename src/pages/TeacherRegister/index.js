import React, {useContext} from 'react';
import Theme from '../../../Theme';
import {Formik} from 'formik';
import * as yup from 'yup';
import {TextInputMask} from 'react-native-masked-text';
import {AuthContext} from '../../contexts/auth';

import {
  UserContatiner,
  Icon,
  RegsContainer,
  ButtonRegistrar,
  ContainerRowFlex,
  Container,
} from './styles';

import Background3 from '../../components/Background3';
import RegField from '../../components/RegField';
import CustomText from '../../components/CustomText';
import SwitchSpecial from '../../components/SwitchSpecial';
import GeneralPicker from '../../components/GeneralPicker';
import {FieldContainer} from '../../components/FieldContainer/styles';
import PasswordInput from '../../components/PasswordInput';

export default function TeacherRegister({navigation}) {
  const {registerProf} = useContext(AuthContext);

  let initials = {
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
  });

  return (
    <Theme>
      <Background3 navigation={navigation} student={false}>
        <UserContatiner>
          <Icon source={require('../../assets/user_white.png')} />
        </UserContatiner>
        <Formik
          initialValues={initials}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={registerProf}
          validationSchema={Schema}>
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
                <RegField
                  placeholder="Nome"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                {errors.name && touched.name && (
                  <CustomText black small>
                    {errors.name}
                  </CustomText>
                )}
                <RegField
                  placeholder="Sobrenome"
                  value={values.surname}
                  onChangeText={handleChange('surname')}
                />
                {errors.surname && touched.surname && (
                  <CustomText black small>
                    {errors.surname}
                  </CustomText>
                )}
                <RegField
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
                <PasswordInput>
                  value={values.password}
                  onChangeText={handleChange('password')}
                </PasswordInput>
                {errors.password && (
                  <CustomText black small>
                    {errors.password}
                  </CustomText>
                )}
                <RegField
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
                <FieldContainer>
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
                </FieldContainer>
                <ContainerRowFlex>
                  <GeneralPicker
                    value={values.grade}
                    onChange={(value) => setFieldValue('grade', value, false)}
                    grade
                  />
                  <RegField
                    placeholder="Instituição"
                    autoCapitalize="none"
                    value={values.school}
                    onChangeText={handleChange('school')}
                    medium
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
                <RegField
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
                  <RegField
                    placeholder="CEP"
                    value={values.cep}
                    onChangeText={handleChange('cep')}
                    medium
                  />
                  <RegField
                    placeholder="Nº"
                    value={values.num}
                    onChangeText={handleChange('num')}
                    small
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
                <RegField
                  placeholder="Complemento"
                  value={values.details}
                  onChangeText={handleChange('details')}
                />
                {errors.details && (
                  <CustomText black small>
                    {errors.details}
                  </CustomText>
                )}
                <RegField
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
                <RegField
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
                <RegField
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
                <RegField
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
                <RegField
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
                <RegField
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
                <RegField
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
