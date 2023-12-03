import { Submit } from 'components/InputForm/InputForm.styled';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Text = styled.p`
  font-family: 'Gloria Hallelujah', cursive;
  color: ${p => p.theme.theme.colors.white};
  font-size: 24px;
  text-indent: 3ch;
`;

export const Invite = () => {
  return (
    <>
      <Text>
        <strong>Hi there!</strong> This app can help you to store your contacts,
        and give access to them wherever you are. To start you should register
        below. Enjoy!
      </Text>
    </>
  );
};
export const InviteLogin = () => {
  return (
    <div>
      <Text>Or if you alredy have account, please push</Text>
      <Link to="/login">
        <Submit>LOG IN</Submit>
      </Link>
    </div>
  );
};
export const InviteRegister = () => {
  return (
    <div>
      <Text>Have no account yet? Push</Text>
      <Link to="/registration">
        <Submit>Register</Submit>
      </Link>
    </div>
  );
};
