import {
  FieldTitle,
  Input,
  StyledForm,
  Submit,
  ValidError,
} from 'components/InputForm/InputForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/operations';
import * as Yup from 'yup';

const cardSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').required('This field is required'),
  email: Yup.string().email().required('This field is required'),
  password: Yup.string().min(6, 'Too short').required('This field is required'),
  confirm: Yup.string().required('This field is required'),
});

const confirmPass = ({ password, confirm }) => {
  if (password === confirm) {
    return true;
  }
  alert('You have entered an incorrect confirmation password. Try again');
  return false;
};
export const RegisterForm = () => {
  const dispach = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirm: '',
      }}
      validationSchema={cardSchema}
      onSubmit={(values, actions) => {
        if (confirmPass(values)) {
          dispach(createUser(values));
        }
        actions.resetForm();
      }}
    >
      <StyledForm>
        <FieldTitle>
          Name
          <Input name="name" />
          <ValidError name="name" component="div" />
        </FieldTitle>
        <FieldTitle>
          Email
          <Input type="email" name="email" />
          <ValidError name="email" component="div" />
        </FieldTitle>
        <FieldTitle>
          Password
          <Input type="password" name="password" />
          <ValidError name="password" component="div" />
        </FieldTitle>
        <FieldTitle>
          Confirm Password
          <Input type="password" name="confirm" />
          <ValidError name="confirm" component="div" />
        </FieldTitle>
        <Submit type="submit">Signup</Submit>
      </StyledForm>
    </Formik>
  );
};
