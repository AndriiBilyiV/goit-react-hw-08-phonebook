import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FieldTitle,
  Input,
  StyledForm,
  Submit,
  ValidError,
} from './InputForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
const phoneRegExp = /^[\d -]{5,15}$/;
const cardSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').required('This field is required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('This field is required'),
});

export const InputForm = () => {
  const dispach = useDispatch();
  const contacts = useSelector(getContacts);

  const checkAvailability = name => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is alredy in contact list`);
      return false;
    } else {
      return true;
    }
  };

  const sendDispach = values => dispach(addContact(values));

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={cardSchema}
        onSubmit={(values, actions) => {
          if (checkAvailability(values.name)) {
            sendDispach(values);
            actions.resetForm();
          }
        }}
      >
        <StyledForm>
          <FieldTitle>
            Name
            <Input name="name" />
            <ValidError name="name" component="div" />
          </FieldTitle>
          <FieldTitle>
            Number
            <Input name="number" />
            <ValidError name="number" component="div" />
          </FieldTitle>
          <Submit type="submit">Add contact</Submit>
        </StyledForm>
      </Formik>
    </div>
  );
};
