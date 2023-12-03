import {
  ContactsBox,
  MainTitle,
} from 'components/ContactsBox/ContactsBox.styled';
import { Invite, InviteLogin } from 'components/Invite/Invite';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const Registration = () => {
  return (
    <ContactsBox>
      <MainTitle>Registartion</MainTitle>
      <Invite />
      <RegisterForm />
      <InviteLogin />
    </ContactsBox>
  );
};
