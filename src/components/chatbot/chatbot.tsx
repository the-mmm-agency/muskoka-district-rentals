import { InferProps } from 'prop-types'
import React from 'react'
import SimpleChatBot from 'react-simple-chatbot'

import { sendToAdmin } from './chatbot.email'

const ChatBot: React.FC<InferProps<typeof SimpleChatBot.propTypes>> = props => {
  const handleEnd = async ({
    steps,
    values,
  }: {
    steps: Step[]
    values: Record<string, any>
  }) => {
    await sendToAdmin({
      message: `Steps \n ${JSON.stringify(steps)}\n Value \n ${JSON.stringify(
        values
      )}`,
    })
  }
  return <SimpleChatBot handleEnd={handleEnd} steps={steps}></SimpleChatBot>
}

export default ChatBot
