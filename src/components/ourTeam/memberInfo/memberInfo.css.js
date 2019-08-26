import styled from '@xstyled/emotion'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  max-width: 40%;
  padding-left: 3;
  overflow: hidden;
  z-index: 1;
`

export const Bio = styled(motion.div)`
  background-color: white;
  color: textPrimary;
  margin-left: 2;
  min-height: 80vh;
  padding: 4;
  z-index: 1001;
`

export const Info = styled(motion.div)`
  margin-bottom: 1;
  padding-left: 4;
  width: 25rem;
`

export const Name = styled.h4`
  color: white;
  font-family: sans;
  font-weight: normal;
  white-space: nowrap;
`

export const Title = styled.span`
  color: white;
  font-weight: bold;
  font-size: 6;
  text-transform: uppercase;
`
