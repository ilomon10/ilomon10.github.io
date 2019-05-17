import React from 'react'
import styled from 'styled-components'

import GridBackground from './gridBackground'
import Image from './image'
import Text from './text'
import constant from './constant'

const HeroImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 254px;
  img {
    image-rendering: pixelated;
  }
`
const HeroTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const comp = ({ className }) => (
  <div className={className}>
    <GridBackground />
    <HeroTitle>
      <Text align='center' variant='display' style={{marginBottom: constant.margin[8],letterSpacing: 4}}>i'm ilo, an</Text>
      <Text align='center' variant='title' style={{letterSpacing: 6}}>Front End Developer</Text>
    </HeroTitle>
    <HeroImage>
      <Image />
    </HeroImage>
  </div>
)

const Hero = styled(comp)`
  position: relative;
  height: 100vh;
  margin-bottom: ${constant.margin[6]};
`

export default Hero;