import styled from 'styled-components'
import constant from './constant'

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #57606f;
  padding: ${constant.padding[6]};
  color: white;
  opacity: 0;
  transition: opacity 200ms ease;
`
CardOverlay.propTypes = {}

export const CardImage = styled.div`
  width: 100%;
  img {
    image-rendering: pixelated;
  }
`
CardImage.propTypes = {}

const Card = styled.div`
  position: relative;
  background-color: #f1f2f6;
  &:hover {
    ${CardOverlay} {
      opacity: 1;
    }    
  }
`

Card.propTypes = {}

export default Card;