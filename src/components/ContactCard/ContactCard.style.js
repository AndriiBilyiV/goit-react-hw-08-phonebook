import { styled } from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;
export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.theme.spasing(1)} 28px
    ${p => p.theme.theme.spasing(1)} 0;
  font-size: 22px;
  color: white;
  position: relative;
`;
