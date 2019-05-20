import React from 'react'
import { useInput } from 'react-hanger'

import Button from 'components/button'
import Box from 'elements/box'
import Flex from 'elements/flex'
import Text from 'elements/text'
import Input from 'components/input'

const ContactForm = () => {
  const name = useInput('')
  const email = useInput('')
  const subject = useInput('')
  const message = useInput('')
  return (
    <Box mt={5}>
      <Text as="h2" mb={3} fontSize={3}>
        Get in touch with us
      </Text>
      <Text color="text.secondary" variant="bold" ml={1}>
        If you have any question, Please don’t hesitate to send us a message
      </Text>
      <Flex as="form" mt={5} flexWrap="wrap">
        <Input
          type="text"
          mr={4}
          value={name.value}
          onChange={name.onChange}
          placeholder="Enter your name..."
        />
        <Input
          type="email"
          mr={4}
          value={email.value}
          onChange={email.onChange}
          placeholder="Enter your email..."
        />
        <Input
          type="text"
          mr={4}
          value={subject.value}
          onChange={subject.onChange}
          placeholder="Subject (optional)"
        />
        <Box
          as="textarea"
          height="200px"
          width="100%"
          mt={4}
          value={message.value}
          onChange={message.onChange}
          placeholder="Here goes your message"
        />
        <Button variant="transparent" type="submit">
          send message
        </Button>
      </Flex>
    </Box>
  )
}

export default ContactForm
