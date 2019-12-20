import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { system, variant } from '@xstyled/system';

const textStyles = variant({
  default: 'default',
  key: 'textStyles',
});

const Heading = styled('h2', { shouldForwardProp: shouldForwardProp })(
  system,
  textStyles
);

export default Heading;
