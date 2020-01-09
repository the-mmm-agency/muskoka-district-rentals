import styled, { css } from '@xstyled/emotion';

import { StyledHeader } from './header.desktop.css';

import ProductionLink from 'components/productionLink';
import Link from 'elements/link';
import { transition } from 'theme/transitions';

const activeStyle = ({ active }: { active: boolean }) => css`
  height: ${active ? '35rem' : '60px'};
`;

const link = css`
  width: 100%;
  height: 100%;
  color: textPrimary;
  font-size: 4;
  font-family: serif;
  text-transform: capitalize;
`;

export const GatsbyLink = styled(Link)`
  ${link}
`;
export const ExternalLink = styled(ProductionLink)`
  ${link}
`;

export const Header = styled(StyledHeader)`
  padding: 1;
  flex-wrap: wrap;
  overflow: hidden;
  ${activeStyle}
  ${transition('height', { duration: 'shorter' })};
`;
