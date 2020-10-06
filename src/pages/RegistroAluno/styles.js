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
  margin-bottom: 10%;
`;

export const Icon = styled.Image`
  width: 45%;
  height: 55%;
`;

export const RegsContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  width: 100%;
  height: 64.28%;
  border: 4px solid ${(props) => props.theme.colors.fundoAzul};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ButtonContinuar = styled(Button)`
  position: absolute;
  margin-top: 480px;
`;

export const ContainerRowFlex = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
  width: 87.5%;
`;
