import { Theme } from 'react-simple-chatbot/theme';

import colors from 'theme/colors';
import typography from 'theme/typography';

const theme: Theme = {
  background: colors.backgroundLight,
  fontFamily: typography.fonts.sans,
  headerBgColor: colors.primary,
  // TODO: Auto generate based on contrast guidelines
  headerFontColor: '#ffffff',
  headerFontSize: typography.fontSizes[5],
  botBubbleColor: colors.primary,
  botFontColor: '#ffffff',
  userBubbleColor: colors.backgroundDark,
  userFontColor: colors.textPrimary,
};

export default theme;
