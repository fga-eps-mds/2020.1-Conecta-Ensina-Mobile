import styled from 'styled-components';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 45px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  margin-top: 10px;
`;

export const PickerView = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  border-radius: 3px;
  align-items: center;
  margin-left: 10px;
  width: 80%;
  height: 42px;
`;
