import colors from 'theme/colors'
import transitions, { duration } from 'theme/transitions'

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
    flat: {
      background: colors.primary,
      border: 'none',
      color: colors.white,
    },
    outlined: {
      background: 'transparent',
      border: '1px solid colors.primary',
      color: colors.text.primary,
    },
    transparent: {
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.1)',
        boxShadow: 'none',
        transform: 'none',
      },
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
    },
  },
}
