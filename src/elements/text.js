import styled from 'styled-components'
import { variant } from 'styled-system'

import Box from './box'

import { typography } from 'theme/system'

const textStyles = variant({
  key: 'textStyles',
})

const Text = styled(Box)(typography, textStyles)

Text.displayName = 'Text'

Text.propTypes = {
  ...typography.propTypes,
  ...textStyles.propTypes,
}

Text.defaultProps = {
  as: 'span',
}

export default Text
