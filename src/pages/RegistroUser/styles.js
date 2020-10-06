import styled from 'styled-components/native';
import {Button} from '../../components/ButtonContinuar/styles';

export const UserContatiner = styled.View`
  width: 18.2%;
  height: 13%;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.fundoAzul};
  align-items: center;
  justify-content: center;
  margin-top: 5.7%;
  margin-bottom: 7.14%;
`;

export const Icon = styled.Image`
  width: 45%;
  height: 55%;
`;

export const RegsContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  height: 64.28%;
`;

export const ButtonContinuar = styled(Button)`
  position: absolute;
  margin-top: 480px;
`;
