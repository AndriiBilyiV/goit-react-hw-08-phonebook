import { useDispatch } from 'react-redux';
import { FilterInput, Message } from './Filter.styled';

const filter = value => {
  return {
    type: 'filter/change',
    payload: value,
  };
};

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Message>Find contacts by name</Message>
      <FilterInput onChange={evt => dispatch(filter(evt.target.value))} />
    </div>
  );
};
