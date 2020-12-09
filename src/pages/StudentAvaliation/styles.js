import styled from 'styled-components/native';

export const ContainerB = styled.View`
  align-items: center;
  margin-bottom: 8.4%;
  flex: 1;
`;

export const ContainerW = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;

export const Icon = styled.Image`
  width: 52%;
  height: 63%;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  flex: 2;
`;

export const UserContainer = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.branco};
  align-items: center;
  justify-content: center;
  margin-top: 5.5%;
  flex: 1.2;
`;
export const ContainerTextBlue = styled.View`
  margin-top: 5%;
  padding-top: 1%;
  justify-content: center;
  flex: 0.8;
`;
export const RedCommentContainer = styled.TextInput.attrs({
  editable: true,
  maxLength: 280,
  placeholder: 'Insira um comentário',
  placeholderTextColor: '#F6F6F6',
  textAlign: 'center',
  multiline: true,
})`
  background-color: ${(props) => props.theme.colors.vermelho};
  color: ${(props) => props.theme.colors.branco};
  text-align: center;
  align-self: center;
  width: 85%;
  height: 56%;
  margin-top: 18%;
  border-radius: 20px;
`;
export const SubmitReview = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.fundoAzul};
  align-self: center;
  justify-content: center;
  width: 50%;
  height: 15%;
  border-radius: 20px;
  margin-top: 8%;
  margin-bottom: 8%;
  align-content: center;
`;
