import { transparentize } from 'polished';

const colors = {
  modes: {
    dark: {
      backgroundLight: '#344051',
      backgroundDefault: '#273142',
      backgroundDark: '#212A38',
      textPrimary: '#ffffff',
      textSecondary: '#b6b6b6',
      textParagraph: '#ffffff',
      textLight: '#cccccc',
    },
  },
  primary: '#212a38',
  footer: '#212020',
  secondary: '#3278b5',
  alt: '#718198',
  starRated: '#efa913',
  white: '#ffffff',
  black: '#000000',
  backgroundPrimary: transparentize(0.2, '#212a38'),
  backgroundDark: '#eaecef',
  backgroundDefault: '#f1f1f1',
  backgroundLight: '#ffffff',
  textPrimary: '#000000',
  textAlt: '#333',
  textDisabled: '#DCE0E0',
  textSecondary: '#344051',
  textParagraph: '#555',
  textLight: '#666',
};

export type Colors = typeof colors;

export default colors;
