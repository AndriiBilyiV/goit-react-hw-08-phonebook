import { styled } from 'styled-components';

const MessageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
const Message = styled.h1`
  color: ${p => p.theme.theme.colors.white};
  font-size: 72px;
  font-family: 'Gloria Hallelujah', cursive;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RefreshMessage = () => {
  return (
    <MessageWrapper>
      <Message>Updating, wait a second...</Message>
    </MessageWrapper>
  );
};
