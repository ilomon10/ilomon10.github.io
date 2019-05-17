import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Container from './container'
import Flex from './flex'
import Text from './text'
import constant from './constant'

const comp = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <Flex parent spaceBetweenMain>
        <Flex child>
          <Text as='h1' variant='title' style={{margin: 0}}>
            <Link
              to="/"
              style={{ textDecoration: `none` }}
            >
              {siteTitle}
            </Link>
          </Text>
        </Flex>
        <Flex child parent>
          <Flex child>
            <Text align='right'>portfolio</Text>
          </Flex>
          <Flex child>
            <Text align='right'>what i do</Text>
          </Flex>
          <Flex child>
            <Text align='right'>contact</Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  </header>
)

const Header = styled(comp)`
  color: #57606f;
  margin-bottom: ${constant.margin[6]};
  ${Text} {
    margin-left: ${constant.margin[12]};
  }
  h1 {
    letter-spacing: 4px;
    a { color: #57606f; }
  }
  ${Container} {
    padding: ${constant.padding[4]} 0;
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
