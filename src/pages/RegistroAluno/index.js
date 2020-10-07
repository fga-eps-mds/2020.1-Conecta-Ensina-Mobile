import React, {useState} from 'react';
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

import {View, Text} from 'react-native';

import Background3 from '../../components/Background3';
import RegFieldBig from '../../components/RegFieldBig';
import RegFieldMedium from '../../components/RegFieldMedium';
import RegFieldSmall from '../../components/RegFieldSmall';
import CustomText from '../../components/CustomText';

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
            adulthood: '',
            cpf: '',
            cep: '',
            num: '',
            details: '',
            special: '',
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={yup.object().shape({
            name: yup.string().required('Required'),
            surname: yup.string().required('Required'),
            email: yup.string().email().required('Required'),
            password: yup.string().min(8).required('Required'),
            grade: yup.number().required('Required'),
            school: yup.string().required('Required'),
            adulthood: yup.boolean().required('Required'),
            cpf: yup.number().required('Required'),
            cep: yup.number().required('Required'),
            num: yup.number().required('Required'),
            details: yup.string().required('Required'),
            special: yup.string(),
          })}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <Container>
              <RegsContainer>
                <View>
                  <RegFieldBig
                    placeholder="Nome"
                    value={values.name}
                    onChangeText={handleChange('name')}
                  />
                </View>
                <View>
                  <RegFieldBig
                    placeholder="Sobrenome"
                    value={values.surname}
                    onChangeText={handleChange('surname')}
                  />
                </View>
                <View>
                  <RegFieldBig
                    placeholder="Email"
                    autoCapitalize="none"
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                </View>
                <View>
                  <RegFieldBig
                    placeholder="Senha"
                    autoCapitalize="none"
                    value={values.password}
                    onChangeText={handleChange('password')}
                  />
                </View>
                <ContainerRowFlex>
                  <RegFieldSmall
                    placeholder="Serie"
                    autoCapitalize="none"
                    value={values.grade}
                    onChangeText={handleChange('grade')}
                  />
                  <RegFieldMedium
                    placeholder="Instituição"
                    autoCapitalize="none"
                    value={values.school}
                    onChangeText={handleChange('school')}
                  />
                </ContainerRowFlex>
                <ContainerRowFlex>
                  <RegFieldSmall
                    placeholder="Adulto?"
                    value={values.adulthood}
                    onChangeText={handleChange('adulthood')}
                  />
                  <RegFieldMedium
                    placeholder="CPF"
                    value={values.cpf}
                    onChangeText={handleChange('cpf')}
                  />
                </ContainerRowFlex>
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
                <View>
                  <RegFieldBig
                    placeholder="Complemento"
                    value={values.details}
                    onChangeText={handleChange('details')}
                  />
                </View>
                <View>
                  <RegFieldBig
                    placeholder="Necessidades Especiais"
                    autoCapitalize="none"
                    value={values.special}
                    onChangeText={handleChange('special')}
                  />
                </View>
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
