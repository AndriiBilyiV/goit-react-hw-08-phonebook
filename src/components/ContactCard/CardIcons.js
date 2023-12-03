import { IoPersonCircleSharp } from 'react-icons/io5';
import { MdBlockFlipped } from 'react-icons/md';
import { styled } from 'styled-components';

const FaceWrapper = styled.div`
  background-color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  svg {
    color: ${p => p.theme.theme.colors.mediumRedViolet};
  }
`;
export const FaceIcon = () => {
  return (
    <FaceWrapper>
      <IoPersonCircleSharp size={48} />
    </FaceWrapper>
  );
};

const DeleteWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  svg {
    color: ${p => p.theme.theme.colors.christalle};
    transition: color 200ms linear;
    &:hover {
      color: red;
      transition: color 200ms linear;
    }
  }
`;
export const DeleteIcon = () => {
  return (
    <DeleteWrapper>
      <MdBlockFlipped size={32} />
    </DeleteWrapper>
  );
};
