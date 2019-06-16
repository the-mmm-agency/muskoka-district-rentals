import colors from 'theme/colors'
import transitions, { duration } from 'theme/transitions'

const hovers = {
  transparent: {
    background: 'rgba(0, 0, 0, 0.1)',
    boxShadow: 'none',
    transform: 'none',
  },
  flat: {
    bg: 'primary',
    color: 'white',
    boxShadow: 2,
    transform: 'translateY(-3px)',
    svg: {
      fill: 'white',
    },
    transition: transitions.create(
      ['border', 'background', 'box-shadow', 'transform'],
      {
        duration: duration.short,
      }
    ),
  },
}

const flat = {
  ':hover': hovers.flat,
  background: colors.primary,
  border: 'none',
  color: colors.white,
}

const transparent = {
  ':hover': hovers.transparent,
  background: 'transparent',
  boxShadow: 'none',
  border: 'none',
  color: colors.text.primary,
  fontWeight: 'bold',
  letterSpacing: 'letterSpacings.caps',
  textTransform: 'uppercase',
  transition: transitions.create('background', {
    duration: duration.short,
  }),
  fontStyle: 'bold',
}

const text = {
  ...transparent,
  marginLeft: '-1rem',
}

export default {
  radii: {
    default: 2,
    curved: 6,
    rounded: 30,
  },
  sizes: {
    small: {
      fontSize: '0.65rem',
      padding: '4px 8px',
    },
    medium: {
      fontSize: '0.875rem',
      padding: '10px 16px',
    },
    large: {
      fontSize: '1rem',
      padding: '16px 36px',
    },
  },
  variants: {
    flat,
    outlined: {
      background: 'transparent',
      border: '1px solid colors.primary',
      color: colors.text.primary,
    },
    transparent,
    text,
  },
}
