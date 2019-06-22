import React from 'react'

import Box from 'components/box'
import Button from 'components/button'
import Input from 'components/input'

const ContactForm = () => {
  return (
    <Box mt={5}>
      <Box as="h2" mb={3} fontSize={[3, 2]}>
        Get in touch with us
      </Box>
      <Box as="span" color="textSecondary" variant="bold" ml={1}>
        If you have any question, Please don’t hesitate to send us a message
      </Box>
      <Box
        as="form"
        display="flex"
        mt={[3, 5]}
        flexWrap="wrap"
        data-netlify="true"
      >
        <Input
          type="text"
          name="name"
          mr={2}
          placeholder="Enter your name..."
        />
        <Input
          type="email"
          name="email"
          mr={2}
          placeholder="Enter your email..."
        />
        <Input
          type="text"
          name="subject"
          mr={2}
          placeholder="Subject (optional)"
        />
        <Box
          as="textarea"
          name="message"
          rows={6}
          width="100%"
          mt={4}
          mb={4}
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
