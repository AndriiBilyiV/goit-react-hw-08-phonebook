import { Button, CardWrapper } from './ContactCard.style';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { DeleteIcon, FaceIcon } from './CardIcons';

export const ContactCard = ({ item }) => {
  const dispach = useDispatch();
  const { name, id, number } = item;
  return (
    <CardWrapper>
      <FaceIcon />
      {name}: {number}
      <Button onClick={() => dispach(deleteContact(id))}>
        <DeleteIcon />
      </Button>
    </CardWrapper>
  );
};
