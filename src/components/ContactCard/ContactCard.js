import { Button, CardWrapper } from './ContactCard.style';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { DeleteIcon, FaceIcon } from './CardIcons';

export const ContactCard = ({ item }) => {
  const dispach = useDispatch();
  const { name, id, tel } = item;
  return (
    <CardWrapper>
      <FaceIcon />
      {name}: {tel}
      <Button onClick={() => dispach(deleteContact(id))}>
        <DeleteIcon />
      </Button>
    </CardWrapper>
  );
};
