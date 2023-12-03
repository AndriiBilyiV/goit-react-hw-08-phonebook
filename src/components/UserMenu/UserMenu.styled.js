import { styled } from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CurrentEmail = styled.p`
  color: ${p => p.theme.theme.colors.white};
  font-size: 18px;
  margin: 0;
`;
export const LogOut = styled.button`
  background-color: transparent;
  border: none;
  color: ${p => p.theme.theme.colors.white};
  &:hover {
    color: ${p => p.theme.theme.colors.sandyBrown};
  }
`;
