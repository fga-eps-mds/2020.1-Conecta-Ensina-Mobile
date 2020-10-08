import React from 'react';
import Theme from '../../../Theme';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  UserContatiner,
  Icon,
  RegsContainer,
  ButtonRegistrar,
  ContainerRowFlex,
  Container,
} from './styles';

import {View} from 'react-native';

import Background3 from '../../components/Background3';
import RegFieldBig from '../../components/RegFieldBig';
import RegFieldMedium from '../../components/RegFieldMedium';
import RegFieldSmall from '../../components/RegFieldSmall';
import CustomText from '../../components/CustomText';
import SwitchAdulthood from '../../components/SwitchAdulthood';
import SeriePicker from '../../components/SeriePicker';

export default function RegistroAluno() {
  return (
    <Theme>
      <Background3>
        <UserContatiner>
          <Icon source={require('../../assets/user_white.png')} />
        </UserContatiner>
        <Formik
          initialValues={{
            name: '',
            surname: '',
            email: '',
            password: '',
            grade: '',
            school: '',
            adulthood: false,
            cpf: '',
            cep: '',
            num: '',
            details: '',
            description: '',
            special: '',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values) => {
            fetch('http://192.168.0.8:3333/api/users/create', {
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
              }),
            })
              .then((response) => response.text())
              .then((data) => {
                console.log('Success:', data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            console.log(
              JSON.stringify({
                institution: values.school,
                cpf: values.cpf,
                cep: values.cep,
                number: values.num,
                details: values.details,
                description: values.description,
                adulthood: values.adulthood,
                special: values.special,
              }),
            );
            fetch('http://192.168.0.8:3333/api/students/create', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                grade: values.grade,
                institution: values.school,
                cpf: values.cpf,
                cep: values.cep,
                number: values.num,
                details: values.details,
                description: values.description,
                adulthood: values.adulthood,
                special: values.special,
              }),
            })
              .then((response) => response.text())
              .then((data) => {
                console.log('Success:', data);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          }}
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
            grade: yup.number().required('É necessário indicar uma série'),
            school: yup
              .string('Instituição deve ser um texto')
              .required('É necessário indicar uma instituição'),
            adulthood: yup
              .boolean()
              .required('É necessário indicar maioridade'),
            cpf: yup
              .number('CPF deve ser um numero')
              .required('É necessário indicar um CPF'),
            cep: yup
              .number('CEP deve ser um numero')
              .required('É necessário indicar um CEP'),
            num: yup
              .number('Número do endereço deve ser um numero')
              .required('É necessário indicar um número do endereço'),
            details: yup
              .string('Complemento deve ser um texto')
              .required('É necessário indicar um complemento'),
            special: yup.string('Necessidades especiais deve ser um texto'),
          })}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            setFieldTouched,
            errors,
          }) => (
            <Container>
              <RegsContainer>
                <View>
                  <RegFieldBig
                    placeholder="Nome"
                    value={values.name}
                    onChangeText={handleChange('name')}
                  />
                </View>
                {errors.name && (
                  <CustomText black small>
                    {errors.name}
                  </CustomText>
                )}
                <View>
                  <RegFieldBig
                    placeholder="Sobrenome"
                    value={values.surname}
                    onChangeText={handleChange('surname')}
                  />
                </View>
                {errors.surname && (
                  <CustomText black small>
                    {errors.surname}
                  </CustomText>
                )}
                <View>
                  <RegFieldBig
                    placeholder="Email"
                    autoCapitalize="none"
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                </View>
                {errors.email && (
                  <CustomText black small>
                    {errors.email}
                  </CustomText>
                )}
                <View>
                  <RegFieldBig
                    placeholder="Senha"
                    autoCapitalize="none"
                    value={values.password}
                    onChangeText={handleChange('password')}
                  />
                </View>
                {errors.password && (
                  <CustomText black small>
                    {errors.password}
                  </CustomText>
                )}
                <ContainerRowFlex>
                  <SeriePicker
                    value={values.grade}
                    onChange={(value) => setFieldValue('grade', value, true)}
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
                <ContainerRowFlex>
                  <SwitchAdulthood
                    value={values.adulthood}
                    onChange={(value) =>
                      setFieldValue('adulthood', value, true)
                    }
                  />
                  <RegFieldMedium
                    placeholder="CPF"
                    value={values.cpf}
                    onChangeText={handleChange('cpf')}
                  />
                </ContainerRowFlex>
                {errors.adulthood && (
                  <CustomText black small>
                    {errors.adulthood}
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
                <View>
                  <RegFieldBig
                    placeholder="Complemento"
                    value={values.details}
                    onChangeText={handleChange('details')}
                  />
                </View>
                {errors.details && (
                  <CustomText black small>
                    {errors.details}
                  </CustomText>
                )}
                <View>
                  <RegFieldBig
                    placeholder="Descrição"
                    autoCapitalize="none"
                    value={values.description}
                    onChangeText={handleChange('description')}
                  />
                </View>
                {errors.description && (
                  <CustomText black small>
                    {errors.description}
                  </CustomText>
                )}
                <View>
                  <RegFieldBig
                    placeholder="Necessidades Especiais"
                    autoCapitalize="none"
                    value={values.special}
                    onChangeText={handleChange('special')}
                  />
                </View>
                {errors.special && (
                  <CustomText black small>
                    {errors.special}
                  </CustomText>
                )}
              </RegsContainer>
              <ButtonRegistrar onPress={handleSubmit}>
                <CustomText white bigSmall>
                  Continuar
                </CustomText>
              </ButtonRegistrar>
            </Container>
          )}
        </Formik>
      </Background3>
    </Theme>
  );
}
