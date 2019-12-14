import styled, { css } from '@xstyled/emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'elements/link';
import { transition } from 'theme/transitions';

const Header = styled.h6`
  margin-left: 4;
  font-size: 4;
`;

const ConciergeService = ({ service, image, setSelected }) => (
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
      to="/guest-services"
    >
      <Img
        css={css`
          width: 12.5rem;
          min-width: 12.5rem;
          max-width: 12.5rem;
          min-height: 8rem;
          max-height: 8rem;
        `}
        fluid={image.localFile.childImageSharp.fluid}
      />
      <Header>{service}</Header>
    </Link>
  </li>
);

export const query = graphql`
  fragment ConciergeService on wordpress__wp_page_contentAcfConcierge_services {
    image {
      localFile {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    service
  }
`;

ConciergeService.propTypes = {
  image: PropTypes.object.isRequired,
  service: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default ConciergeService;
