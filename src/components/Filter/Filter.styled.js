import { styled } from 'styled-components';

export const Message = styled.p`
  font-family: 'Gloria Hallelujah', cursive;
  color: white;
  font-size: 20px;
`;
export const FilterInput = styled.input`
  font-size: 24px;
  &:focus-visible {
    outline-color: ${p => p.theme.theme.colors.mediumRedViolet};
  }
`;
