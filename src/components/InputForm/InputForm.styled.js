import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 48px;
`;

export const FieldTitle = styled.label`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  color: ${p => p.theme.theme.colors.sandyBrown};
  font-family: 'Gloria Hallelujah', cursive;
  font-weight: 500;
`;
export const Input = styled(Field)`
  font-family: 'Helvetica Neue', sans-serif;
  &:focus-visible {
    outline-color: ${p => p.theme.theme.colors.mediumRedViolet};
  }
`;

export const ValidError = styled(ErrorMessage)`
  font-size: 18px;
  color: red;
`;

export const Submit = styled.button`
  background-color: ${p => p.theme.theme.colors.sandyBrown};
  font-size: 24px;
  color: ${p => p.theme.theme.colors.christalle};
  font-weight: 900;
  font-family: 'Gloria Hallelujah', cursive;
  padding: ${p => p.theme.theme.spasing(4)};
  width: fit-content;
  margin: auto;
  border-radius: 12px;
  border: none;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transition: background-color 200ms linear;
  &:hover {
    background-color: white;
    transition: background-color 200ms linear;
  }
`;
