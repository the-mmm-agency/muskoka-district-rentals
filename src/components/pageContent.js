import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import Flex from 'components/flex'
import { up } from 'theme/media'

const PageContent = ({ children, checkAvailability, ...props }) => (
  <Flex
    css={
      checkAvailability
        ? css`
            ${up('md')} {
              margin-top: -100px;
            }
          `
        : null
    }
    as="section"
    px={{ xs: 3, sm: 4, md: 5, lg: 6 }}
    py={{ xs: 0, sm: 1, md: 2, lg: 3 }}
    mb={{ xs: 3, md: 5, lg: 6 }}
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
