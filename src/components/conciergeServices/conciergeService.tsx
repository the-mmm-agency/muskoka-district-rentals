import styled, { css } from '@xstyled/emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'elements/heading';
import Link from 'elements/link';
import { transition } from 'theme/transitions';

const ConciergeService = ({ name, image, setSelected }) => (
  <li
    css={css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      padding: 2;
      ${transition('background-color')}
    `}
    onMouseOver={() => setSelected(image)}
    onFocus={() => setSelected(image)}
  >
    <Link
      color="textPrimary"
      display="inline-flex"
      width={1}
      alignItems="center"
      to="/boat-rentals"
    >
      <Img
        css={css`
          width: 12.5rem;
          min-width: 12.5rem;
          max-width: 12.5rem;
          min-height: 8rem;
          max-height: 8rem;
        `}
        fluid={image.childImageSharp.fluid}
      />
      <Heading as="h6" ml={4} fontSize={4}>
        {name}
      </Heading>
    </Link>
  </li>
);

export const query = graphql`
  fragment ConciergeService on ConciergeServicesJson {
    image {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    name
  }
`;

export default ConciergeService;
