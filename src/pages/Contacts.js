import {
  ContactsBox,
  MainTitle,
  SecondryTitle,
} from 'components/ContactsBox/ContactsBox.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { InputForm } from 'components/InputForm/InputForm';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Contacts = () => {
  return (
    <ContactsBox>
      <UserMenu />
      <MainTitle>PhoneBook</MainTitle>
      <InputForm />
      <SecondryTitle>Contacts</SecondryTitle>
      <Filter />
      <ContactsList />
    </ContactsBox>
  );
};
