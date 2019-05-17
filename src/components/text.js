import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import constant from './constant';

const Variant = {
  DISPLAY: css`
    font-size: ${constant.textSizes['2xl']};
    line-height: ${constant.textSizes['3xl']};
  `,
  HEADLINE: css`
    font-size: ${constant.textSizes.xl};
  `,
  SUBHEADING: css`
    font-size: ${constant.textSizes.xl};
    opacity: 0.65;
  `,
  TITLE: css`
    font-size: ${constant.textSizes.lg};
  `,
  SUBTITLE: css`
    font-size: ${constant.textSizes.lg};
    opacity: 0.65;
  `,
  BODY1: css`
    line-height: ${constant.textSizes.xl};
    font-size: ${constant.textSizes.base};
  `,
  BODY2: css`
    font-size: ${constant.textSizes.base};
    font-weight: ${constant.fontWeights.bold};
  `,
  CAPTION: css`
    font-size: ${constant.textSizes.sm};
  `,
  BUTTON: css`
    font-size: ${constant.textSizes.xs};
    letter-spacing: ${constant.width['px']};
    font-weight: ${constant.fontWeights.bold};
    text-transform: uppercase;
  `,
  INHERIT: css`
    font-size: 'inherit';
  `,
}

export const styles = {
  base: css`
    color: ${({ color }) => constant.colors[color]};
    font-family: ${constant.fonts.sans.join(', ')};
  `,
  variant: { ...Variant }
}

const Text = styled('div')`
  ${styles.base};
  ${({ variant }) => {
    switch (variant) {
      case 'display': return Variant.DISPLAY;
      case 'headline': return Variant.HEADLINE;
      case 'subheading': return Variant.SUBHEADING;
      case 'title': return Variant.TITLE;
      case 'subtitle': return Variant.SUBTITLE;
      case 'body1': return Variant.BODY1;
      case 'body2': return Variant.BODY2;
      case 'caption': return Variant.CAPTION;
      case 'button': return Variant.BUTTON;
      case 'inherit': return Variant.INHERIT;
      default: return Variant.INHERIT;
    }
  }}
  text-align: ${({ align }) => {
    switch (align) {
      case 'center': return 'center';
      case 'right': return 'right';
      case 'left': return 'left';
      default: return 'left';
    }
  }}
  ${({ size }) => size ? constant.textSizes[size] : ''};
  & & {
    display: inline-block;
  }
`

Text.defaultProps = {
  variant: 'inherit',
  align: 'left',
}
Text.propTypes = {
  color: PropTypes.oneOf(Object.keys(constant.colors)),
  size: PropTypes.oneOf(Object.keys(constant.textSizes)),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
  variant: PropTypes.oneOf([
    'display',
    'headline',
    'subheading',
    'title',
    'subtitle',
    'body1',
    'body2',
    'caption',
    'button',
    'inherit',
  ])
}

export default Text;