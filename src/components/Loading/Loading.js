import { theme } from 'components/theme';
import { InfinitySpin } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div style={{ position: 'absolute', top: '-140px', right: '-40px' }}>
      <InfinitySpin width="200" color={theme.colors.cerise} />
    </div>
  );
};
