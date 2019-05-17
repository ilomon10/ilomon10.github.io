import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${({ fluid }) => fluid ? '100%' : '992px'};
  width: ${({ fluid }) => fluid ? '100%' : '992px'};
`

Container.propTypes = {
  fluid: PropTypes.bool
}

export default Container;