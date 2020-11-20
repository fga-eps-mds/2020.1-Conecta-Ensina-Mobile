import styled from 'styled-components/native';

export const TimerButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.fundoAzul}
  width: 195px;
  height: 48px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
  margin-bottom: 3%;
`;
