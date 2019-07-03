import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import Flex from 'components/flex'
import { up } from 'theme/media'

const PageContent = ({ children, checkAvailability, ...props }) => (
  <Flex
    css={css`
      ul {
        margin-left: 1.2em;
      }
      ${checkAvailability
        ? css`
            ${up('md')} {
              margin-top: -150px;
              padding-top: 3;
            }
          `
        : null}
    `}
    as="section"
    px={{ xs: 3, sm: 4, md: 5, lg: 6 }}
    py={{ xs: 2, sm: 3, md: 4, lg: 5 }}
    mb={{ xs: 2, md: 3, lg: 5 }}
    flexDirection="column"
    {...props}
  >
    {children}
  </Flex>
)

PageContent.defaultProps = {
  checkAvailability: false,
}

PageContent.propTypes = {
  checkAvailability: PropTypes.bool,
}

export default PageContent
