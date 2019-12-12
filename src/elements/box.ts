import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { system } from '@xstyled/system';

const Box = styled('div', { shouldForwardProp: shouldForwardProp })(system);

export default Box;
