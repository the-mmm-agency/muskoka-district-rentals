import { useInput } from 'react-hanger'
import React from 'react'

import Box from 'components/box'
import Button from 'components/button'
import Input from 'components/input'

const ContactForm = () => {
  const name = useInput('')
  const email = useInput('')
  const subject = useInput('')
  const message = useInput('')
  return (
    <Box mt={5}>
      <Box as="h2" mb={3} fontSize={[3, 2]}>
        Get in touch with us
      </Box>
      <Box as="span" color="textSecondary" variant="bold" ml={1}>
        If you have any question, Please don’t hesitate to send us a message
      </Box>
      <Box as="form" display="flex" mt={[3, 5]} flexWrap="wrap">
        <Input
          type="text"
          mr={2}
          value={name.value}
          onChange={name.onChange}
          placeholder="Enter your name..."
        />
        <Input
          type="email"
          mr={2}
          value={email.value}
          onChange={email.onChange}
          placeholder="Enter your email..."
        />
        <Input
          type="text"
          mr={2}
          value={subject.value}
          onChange={subject.onChange}
          placeholder="Subject (optional)"
        />
        <Box
          as="textarea"
          rows={6}
          width="100%"
          mt={4}
          mb={4}
          value={message.value}
          onChange={message.onChange}
          placeholder="Your Message"
        />
        <Button variant="transparent" ml="-1rem" type="submit">
          send message
        </Button>
      </Box>
    </Box>
  )
}

export default ContactForm
