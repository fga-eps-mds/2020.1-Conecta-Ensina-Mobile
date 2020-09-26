import styled from 'styled-components';

export const Container = styled.View`
  align-items: center;
  width: 100px;
  border-radius: 3px;
  border-width: 1px;
`;

export const PickerView = styled.View`
  background-color: ${(props) => props.theme.colors.cinzaClaro};
  border-radius: 3px;
  align-items: center;
  width: 97px;
  height: 43px;
`;
