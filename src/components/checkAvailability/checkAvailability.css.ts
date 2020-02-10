import styled, { css } from '@xstyled/emotion'

import Number from 'components/number'
import Flex from 'elements/flex'
import { down, up } from 'theme/media'

export const Wrapper = styled(Flex)`
  ${up('md')} {
    flex-wrap: nowrap;
    background-color: backgroundLight;
    border-color: transparent;
    box-shadow: 25;
    margin-top: 5;
    width: 80%;
    z-index: 999;
    padding-left: 3;
  }
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  border-bottom: 0.5px solid;
  border-color: textSecondary;
  width: 100%;
  z-index: availability;
`;

export const SectionWrapper = styled(Flex)`
  ${up('md')} {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  width: 100%;
  &:last-child {
    min-width: fit-content;
  }
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Section = styled(Flex)`
  ${down('sm')} {
    padding: 3 2;
  }
  ${up('md')} {
    flex: 0 0 25%;
    max-width: 25%;
  }
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(100% / 3);
  max-width: calc(100% / 3);
  padding: 4 3;
`;

export const CheckboxLabel = styled.span`
  margin-right: 2;
  color: secondary;
  font-family: serif;
`;

export const Header = styled.span`
  width: 100%;
  margin-bottom: 2;
  color: textLight;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: left;
  text-transform: uppercase;
`;

export const InputWrapper = styled.button`
  background: inherit;
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-start;
  cursor: pointer;
  svg {
    ${down('sm')} {
      width: 2em;
      height: 2em;
      margin-bottom: -0.5em;
    }
    width: 4em;
    height: 4em;
    margin-bottom: -1em;
  }
  &:not(:last-of-type) {
    padding-right: 1;
  }
`;

export const Month = styled.h5`
  ${down('sm')} {
    font-size: 6;
  }
  font-weight: 400;
  color: textSecondary;
  vertical-align: baseline;
  white-space: nowrap;
  margin: 0;
`;

export const number = css`
  ${down('sm')} {
    font-size: 4;
  }
  margin: 0;
  margin-right: auto;
  font-weight: 500;
  font-size: 3;
  vertical-align: baseline;
  cursor: pointer;
`;

export const Day = styled.h4`
  ${number}
`;

export const Guests = styled(Number)`
  ${number}
`;
