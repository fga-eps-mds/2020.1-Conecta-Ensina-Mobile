import styled from 'styled-components/native';

export const FieldContainer = styled.View`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  height: 45px;
  width: 280px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;
