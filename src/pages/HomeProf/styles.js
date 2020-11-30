import styled from 'styled-components/native';
import {ButtonGeral} from '../../components/ButtonGeral/styles';

export const ListFuncoes = styled.FlatList`
  padding-bottom: 120%;
  position: absolute;
  align-self: center;
  flex-direction: row;
`;

export const ButtonMarcarAula = styled(ButtonGeral)`
  margin-top: 7.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonAulaUrgente = styled(ButtonGeral)`
  background-color: ${(props) => props.theme.colors.vermelho};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerAula = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.vermelho};
  width: 78%;
  height: 33%;
  align-self: center;
  margin-bottom: 45%;
  margin-top: 15%;
  border-radius: 20px;
`;

export const ContainerButtons = styled.View`
  height: 25%;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ContainerHorizontal = styled.View`
  flex-direction: row;
  padding-top: 4%;
  padding-left: 6%;
  padding-bottom: 4%;
`;

export const Icon = styled.Image`
  margin-right: 3%;
  width: 36px;
  height: 30px;
`;

export const BigTextContainer = styled.View`
  padding-left: 7%;
  padding-bottom: 3%;
`;
