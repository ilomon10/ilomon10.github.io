import React from 'react'
import styled from 'styled-components'

import GridBackground from './gridBackground'
import Container from './container'
import Text from './text'
import Flex from './flex'

const comp = ({ className }) => (
  <Container fluid className={className}>
    <GridBackground />
    <Container style={{ height: '100vh' }}>
      <Flex parent column centerMain centerCross style={{ height: '100%' }}>
        <Flex child>
          <Text variant='headline' style={{ textAlign: 'center' }}>
            branding . motion graphic<br />
            illustration . web design<br />
            ui/ux . editorial
          </Text>
        </Flex>
        <Flex child>
        </Flex>
      </Flex>
    </Container>
  </Container>
)

const Footer = styled(comp)`
  position: relative;
  height: 100vh;
  margin-bottom: 0;
  ${Text} {
    letter-spacing: 6px;
    line-height: 2rem;
  }
`

export default Footer;