import React from 'react'
import styled from 'styled-components'
import { useInput } from 'react-hanger'

import Input from 'components/input'
import palette from 'theme/palette'
import { rhythm, scale } from 'theme/typography'
import transitions from 'theme/transitions'

const Subtitle = styled.span`
  ${scale(1 / 12)}
  color: ${palette.text.secondary};
  font-weight: 700;
`

const Submit = styled.button`
  @media (hover: none) {
    background-color: transparent;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
  align-items: center;
  appearance: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${palette.text.primary};
  display: inline-flex;
  outline: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  font-weight: 700;
  transition: ${transitions.create('background')};
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
`

const StyledInput = styled(Input)`
  margin-right: ${rhythm(1)};
`

const StyledForm = styled.form`
  display: flex;
  margin-top: ${rhythm(2)};
  flex-wrap: wrap;
`

const Message = styled.textarea`
  appearance: none;
  background: transparent;
  border: none;
  outline: none;
  margin-top: ${rhythm(1)};
  resize: none;
  height: 200px;
  width: 100%;
`

const ContactForm = () => {
  const name = useInput('')
  const email = useInput('')
  const subject = useInput('')
  const message = useInput('')
  return (
    <>
      <h2>Get in touch with us</h2>
      <Subtitle>
        If you have any question, Please don’t hesitate to send us a message
      </Subtitle>
      <StyledForm>
        <StyledInput
          type="text"
          value={name.value}
          onChange={name.onChange}
          placeholder="Enter your name..."
        />
        <StyledInput
          type="email"
          value={email.value}
          onChange={email.onChange}
          placeholder="Enter your email..."
        />
        <StyledInput
          type="text"
          value={subject.value}
          onChange={subject.onChange}
          placeholder="Subject (optional)"
        />
        <Message
          value={message.value}
          onChange={message.onChange}
          placeholder="Here goes your message"
        />
        <Submit type="submit">send message</Submit>
      </StyledForm>
    </>
  )
}

export default ContactForm
