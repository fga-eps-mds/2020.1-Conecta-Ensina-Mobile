import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  width: 71px;
  border-radius: 10px;
`;

export const PickerView = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  border-radius: 10px;
  align-items: center;
  width: 100%;
  height: 45px;
`;
