import React from 'react'; 
import Theme, {theme} from '../../../Theme';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import { Text, SafeAreaView, View} from 'react-native';
import { Container, ContainerGrande, ContainerMedio, ContainerPequeno, ContainerGrupo, Button } from './styles';
import { ButtonGeral } from '../../components/ButtonGeral/styles';
 
export default function ConfirmaProf({navigation}){

    return (
        <Theme>
            <Background1>
              <Container>
                  <ContainerGrande>
                    <CustomText white>
                      Nome
                    </CustomText>
                  </ContainerGrande>
                  <ContainerGrande>
                  <CustomText white>
                      Sobrenome
                    </CustomText>
                  </ContainerGrande>
                 <ContainerGrande>
                 <CustomText white>
                      Email
                    </CustomText>
                  </ContainerGrande>
                  <ContainerGrande>
                  <CustomText white>
                      Senha
                    </CustomText>
                  </ContainerGrande>
                  <ContainerGrupo>
                    <ContainerPequeno>
                    <CustomText white>
                      Serie
                    </CustomText>
                    </ContainerPequeno>
                    <ContainerMedio>
                    <CustomText white>
                      Escola
                    </CustomText>
                    </ContainerMedio>
                  </ContainerGrupo>
                  <ContainerGrupo>
                    <ContainerPequeno>
                    <CustomText white>
                      Adulto
                    </CustomText>
                    </ContainerPequeno>
                    <ContainerMedio>
                    <CustomText white>
                      CPF
                    </CustomText>
                    </ContainerMedio>
                  </ContainerGrupo>
                </Container>
                <Button onPress={() => navigation.navigate('ProfessoresPendente')}>
                  <CustomText white bigSmall>
                    Voltar
                 </CustomText>           
                </Button>
            </Background1>
        </Theme>
    );

}