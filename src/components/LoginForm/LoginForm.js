import {
  FieldTitle,
  Input,
  StyledForm,
  Submit,
  ValidError,
} from 'components/InputForm/InputForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import * as Yup from 'yup';

const cardSchema = Yup.object().shape({
  email: Yup.string().email().required('This field is required'),
  password: Yup.string().min(6, 'Too short').required('This field is required'),
});

export const LoginForm = () => {
  const dispach = useDispatch();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={cardSchema}
      onSubmit={(values, actions) => {
        dispach(logIn(values))
          .unwrap()
          .catch(err => alert('Something wrong, try again'));
        actions.resetForm();
      }}
    >
      <StyledForm>
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
        <Submit type="submit">Log in</Submit>
      </StyledForm>
    </Formik>
  );
};
