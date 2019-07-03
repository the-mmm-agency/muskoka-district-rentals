import React from 'react'

import Box from 'components/box'
import Button from 'components/button'
import Text from 'components/text'
import Flex from 'components/flex'
import Input from 'components/input'
import Heading from 'components/heading'

const ContactForm = () => {
  return (
    <Box mt={5}>
      <Heading mb={3} fontSize={{ xs: 3, md: 2 }}>
        Get in touch with us
      </Heading>
      <Text color="textSecondary" variant="bold" ml={1}>
        If you have any question, Please don’t hesitate to send us a message
      </Text>
      <Flex as="form" mt={{ xs: 3, sm: 5 }} flexWrap="wrap" data-netlify="true">
        <Input
          type="text"
          name="name"
          mr={3}
          placeholder="Enter your name..."
        />
        <Input
          type="email"
          name="email"
          mr={3}
          placeholder="Enter your email..."
        />
        <Input
          type="text"
          name="subject"
          mr={3}
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
      </Flex>
    </Box>
  )
}

export default ContactForm
