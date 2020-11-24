import styled from 'styled-components/native';

export const RedInput = styled.TextInput.attrs({
  placeholderTextColor: '#F6F6F6',
  textAlign: 'center',
  multiline: true,
})`
  font-size: 20px;
  background-color: ${(props) => props.theme.colors.vermelho};
  height: 224px;
  width: 360px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.branco};
`;
