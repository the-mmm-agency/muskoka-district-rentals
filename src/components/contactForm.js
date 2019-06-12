import { useInput } from 'react-hanger'
import React from 'react'

import Button from 'components/button'
import Input from 'components/input'

const ContactForm = () => {
  const name = useInput('')
  const email = useInput('')
  const subject = useInput('')
  const message = useInput('')
  return (
    <div mt={5}>
      <h2 mb={3} fontSize={2}>
        Get in touch with us
      </h2>
      <span color="text.secondary" variant="bold" ml={1}>
        If you have any question, Please don’t hesitate to send us a message
      </span>
      <form display="flex" mt={5} flexWrap="wrap">
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
        <textarea
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
      </form>
    </div>
  )
}

export default ContactForm
