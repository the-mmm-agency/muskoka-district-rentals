import css from '@emotion/css';
import React from 'react';
import SimpleChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import handleEnd from './chatbot.handleEnd';
import steps from './chatbot.steps';
import theme from './chatbot.theme';

const ChatBot: React.FC = props => {
  console.log(steps);
  return (
    <ThemeProvider theme={theme}>
      <SimpleChatBot
        floating
        css={css`
          .cwuCQv {
            width: 40px;
          }
          .rsc-content * {
            transition: none;
            transform: none !important;
          }
        `}
        transition
        handleEnd={handleEnd}
        steps={steps}
        {...props}
      />
    </ThemeProvider>
  );
};
export default ChatBot;
