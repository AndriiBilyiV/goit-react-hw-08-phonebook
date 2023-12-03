import { ContactsList } from './ContactsList/ContactsList';
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import {
  ContactsBox,
  MainTitle,
  SecondryTitle,
} from './ContactsBox/ContactsBox.styled';

export const App = () => {
  return (
    <ContactsBox>
      <MainTitle>PhoneBook</MainTitle>
      <InputForm />

<SecondryTitle>Contacts</SecondryTitle>
      <Filter />
      <ContactsList />

    </ContactsBox>
  );
};
