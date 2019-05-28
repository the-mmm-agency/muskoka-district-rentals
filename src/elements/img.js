import React from 'react'
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import GatsbyImage from 'gatsby-image'

import { box } from 'theme/system'

const Image = styled(GatsbyImage, { shouldForwardProp })(box)

const Img = props => <Image {...props} />

Img.propTypes = {
  ...box.propTypes,
}

Img.displayName = 'Img'

export default Img
