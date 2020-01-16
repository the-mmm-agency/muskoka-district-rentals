import React from 'react'

import Box from 'elements/box'
import Button from 'elements/button'
import Flex from 'elements/flex'
import Heading from 'elements/heading'
import Input from 'elements/input'
import Text from 'elements/text'

const ContactForm = () => {
  return (
    <Box mt={5}>
      <Heading mb={3}>Get in touch with us</Heading>
      <Text color="textLight" fontWeight="bold" ml={1}>
        If you have any questions, Please don’t hesitate to send us a message
      </Text>
      <Flex
        as="form"
        mt={{ xs: 3, sm: 5 }}
        flexWrap="wrap"
        action="mailto:hello@muskokadistrictrentals.com"
        method="get"
        enctype="text/plain"
      >
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
        <Button variant="serif" ml="-1rem" type="submit">
          Send message
        </Button>
      </Flex>
    </Box>
  );
};

export default ContactForm;
