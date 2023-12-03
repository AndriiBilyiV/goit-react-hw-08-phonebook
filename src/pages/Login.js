import {
  ContactsBox,
  MainTitle,
} from 'components/ContactsBox/ContactsBox.styled';
import { InviteRegister } from 'components/Invite/Invite';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <ContactsBox>
      <MainTitle>Log in</MainTitle>
      <LoginForm />
      <InviteRegister />
    </ContactsBox>
  );
};
