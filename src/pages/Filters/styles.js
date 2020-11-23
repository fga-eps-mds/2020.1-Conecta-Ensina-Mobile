import styled from 'styled-components/native';

export const CalendarsContainer = styled.View`
  flex: 4;
`;

export const Container = styled.View`
  flex: 9;
  top: 0px;
  border: 4px solid ${(props) => props.theme.colors.fundoAzul};
  right: 0px;
  left: 0px;
  bottom: 80px;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 6;
`;

export const ContainerFiltros = styled.View`
  flex: 6;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10%;
  padding-bottom: -15%;
`;

export const PickerContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  flex: 2;
  background-color: ${(props) => props.theme.colors.branco};
  width: 100%;
  align-items: center;
`;
