import styled from '@emotion/styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { typography } from 'theme/system'

const Link = styled(AniLink)(typography)

Link.propTypes = {
  ...AniLink.propTypes,
  ...typography.propTypes,
}

export default Link
