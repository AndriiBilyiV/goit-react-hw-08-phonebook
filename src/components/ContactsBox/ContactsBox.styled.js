import { styled } from 'styled-components';

export const ContactsBox = styled.div`
  background-color: ${p => p.theme.theme.colors.kingfisherDaisy};
  border: 8px solid white;
  border-radius: 40px;
  width: 480px;
  padding: ${p => p.theme.theme.spasing(10)} ${p => p.theme.theme.spasing(8)};
  margin: auto;
  margin-top: ${p => p.theme.theme.spasing(20)};
`;

export const MainTitle = styled.h1`
  margin: 0 0 ${p => p.theme.theme.spasing(8)} 0;
  font-size: 44px;
  color: white;
  font-family: 'Gloria Hallelujah', cursive;
  text-shadow: 1px 8px 8px ${p => p.theme.theme.colors.christalle};
`;

export const SecondryTitle = styled.h2`
  font-size: 36px;
  color: white;
  font-family: 'Gloria Hallelujah', cursive;
  text-shadow: 1px 8px 8px ${p => p.theme.theme.colors.christalle};
`;
