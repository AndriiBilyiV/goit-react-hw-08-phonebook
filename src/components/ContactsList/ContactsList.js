import { ContactCard } from 'components/ContactCard/ContactCard';
import { List, SectionWrapper } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getErrorStatus,
  getFilter,
  getLoadingStatus,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loading } from 'components/Loading/Loading';
import toast, { Toaster } from 'react-hot-toast';

export const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoadingStatus);

  const isError = useSelector(getErrorStatus);
  useEffect(() => {
    if (isError) {
      const notify = () =>
        toast(isError.message, {
          style: {
            background: 'red',
          },
        });
      notify();
    }
  }, [isError]);

  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const contactsList = getFilteredContacts();
  return (
    <SectionWrapper>
      {isLoading ? <Loading /> : null}
      <Toaster />
      <List>
        {contactsList.map(item => {
          return (
            <li key={item.id}>
              <ContactCard item={item} />
            </li>
          );
        })}
      </List>
    </SectionWrapper>
  );
};
