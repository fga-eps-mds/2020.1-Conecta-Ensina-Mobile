import styled from 'styled-components/native';

export const RedContainer = styled.View`
  background-color: ${(props) => props.theme.colors.vermelho};
  height: ${(props) => (props.small || props.medium ? '40px' : '60px')};
  width: ${(props) =>
    props.small ? '71px' : props.medium ? '196px' : '280px'};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
