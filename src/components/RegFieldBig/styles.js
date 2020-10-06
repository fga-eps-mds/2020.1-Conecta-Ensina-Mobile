import styled from 'styled-components/native';

export const BlueInput = styled.TextInput.attrs({
  placeholderTextColor: '#F6F6F6',
  textAlign: 'center',
})`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  height: 45px;
  width: 280px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.branco};
`;
