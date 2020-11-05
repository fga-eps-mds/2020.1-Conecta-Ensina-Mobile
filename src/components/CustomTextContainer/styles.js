import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: ${(props) => (props.marginTop ? props.marginTop.value : 0)};
  margin-bottom: ${(props) => (props.marginBot ? props.marginBot.value : 0)};
`;
