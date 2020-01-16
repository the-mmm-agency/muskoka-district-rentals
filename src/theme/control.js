import { transparentize } from 'polished';
import { th } from '@xstyled/system';
import { css } from '@emotion/core';

export const controlFocus = color => props => css`
  outline: none;
  box-shadow: 0 0 0 0.2rem ${transparentize(0.75, th.color(color)(props))};
`;
