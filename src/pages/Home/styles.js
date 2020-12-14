import styled from 'styled-components/native';
import {ButtonGeral} from '../../components/ButtonGeral/styles';

export const FilterList = styled.FlatList`
  padding-bottom: 120%;
  position: absolute;
  align-self: center;
`;

export const MarkClassButton = styled(ButtonGeral)`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UrgentClassButton = styled(ButtonGeral)`
  background-color: ${(props) => props.theme.colors.vermelho};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 5%;
`;

export const ClassContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  width: 78%;
  height: 58%;
  align-self: center;
  border-radius: 20px;
`;

export const ContainerButtons = styled.View`
  height: 25%;
  flex: 1;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ContainerClassUpper = styled.View`
  flex: 2;
  flex-direction: row;
  padding-top: 6%;
  padding-left: 6%;
`;

export const ContainerClassLower = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 6%;
`;

export const Icon = styled.Image`
  margin-right: 3%;
  width: 28px;
  height: 24px;
`;

export const BigTextContainer = styled.View`
  flex: 4;
  align-self: center;
  margin-left: -30%;
`;

export const CenterContainer = styled.View`
  margin-top: 5%;
  justify-content: center;
  align-items: center;
  flex: 5;
`;

export const LowerContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 2;
  margin-bottom: 15%;
`;
