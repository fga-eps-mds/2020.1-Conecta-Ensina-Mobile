import styled from 'styled-components/native';
export const TeacherList = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    marginLeft: '7.7%',
  },
}))`
  align-self: center;
  flex: 1;
  position: absolute;
  top: -4%;
  border: 4px solid ${(props) => props.theme.colors.fundoAzul};
  bottom: 13.3%;
  border-radius: 20px;
  width: 100%;
`;
