import React from 'react';
import SimpleChatBot, { ChatBotProps } from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import handleEnd from './chatbot.handleEnd';
import steps from './chatbot.steps';
import theme from './chatbot.theme';

const Chatbot: React.FC<ChatBotProps> = props => (
  <ThemeProvider theme={theme}>
    <SimpleChatBot
      botAvatar="https://muskoka-district-rentals.netlify.com/static/3e991c7e4ee29b11de796d881cc65233/05a7b/muskoka-logo.png"
      floating
      handleEnd={handleEnd}
      steps={steps}
      {...props}
    />
  </ThemeProvider>
);

export default Chatbot;
