import React from 'react'
import styled from 'styled-components'

const comp = props => (
  <span {...props}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </span>
)
const GridBackground = styled(comp)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f1f2f6;
  display: flex;
  > * {
    pointer-events: none;
    flex: 1;
    position: relative;
    display: block;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 1px;
      background-color: black;
      opacity: 0.05;
    }
    &:last-child::after {
      content: none;
    }
  }
`

export default GridBackground;