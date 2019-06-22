import colors from 'theme/colors'
import shadows from 'theme/shadows'
import typography from 'theme/typography'
import transitions from 'theme/transitions'
import layout from 'theme/layout'

export default {
  ...layout,
  ...typography,
  colors,
  transition: transitions,
  shadows,
}
