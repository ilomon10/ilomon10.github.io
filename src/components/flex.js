import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

import constant from "./constant"

const Parent = {
  base: css`display: flex!important;`,
  Inline: css`display: inline-flex!important;`,
  Column: css`flex-direction: column!important;`,
  ColumnReverse: css`flex-direction: column-reverse!important;`,
  Row: css`flex-direction: row!important;`,
  RowReverse: css`flex-direction: row-reverse!important;`,
  CenterMain: css`justify-content: center!important;`,
  CenterCross: css`align-items: center!important;`,
  StartMain: css`justify-content: flex-start!important;`,
  StartCross: css`align-items: flex-start!important;`,
  EndMain: css`justify-content: flex-end!important;`,
  EndCross: css`align-items: flex-end!important;`,
  Wrap: css`flex-wrap: wrap!important;`,
  StretchCross: css`align-items: stretch!important;`,
  SpaceBetweenMain: css`justify-content: space-between!important;`,
}
const Child = {
  base: css`display: block!important; max-width: 100%;`,
  Grow: css`flex-grow: 1!important; min-width: 0!important;`,
  NoShrink: css`flex-shrink: 0!important;`,
}

export const styles = {
  Parent,
  Child,
}

const Flex = styled.div`
  ${({ child }) => child ? Child.base : ''};
  ${({ grow, child }) => (grow && child) ? Child.Grow : ''};
  ${({ noShrink, child }) => (noShrink && child) ? Child.NoShrink : ''};

  ${({ parent }) => parent ? Parent.base : ''};
  ${({ inline }) => inline ? Parent.Inline : ''};
  ${({ column }) => column ? Parent.Column : ''};
  ${({ columnReverse }) => columnReverse ? Parent.ColumnReverse : ''};
  ${({ row }) => row ? Parent.Row : ''};
  ${({ rowReverse }) => rowReverse ? Parent.RowReverse : ''};
  ${({ startMain }) => startMain ? Parent.StartMain : ''};
  ${({ startCross }) => startCross ? Parent.StartCross : ''};
  ${({ centerMain }) => centerMain ? Parent.CenterMain : ''};
  ${({ centerCross }) => centerCross ? Parent.CenterCross : ''};
  ${({ endMain }) => endMain ? Parent.EndMain : ''};
  ${({ endCross }) => endCross ? Parent.EndCross : ''};
  ${({ wrap }) => wrap ? Parent.Wrap : ''};
  ${({ stretchCross }) => stretchCross ? Parent.StretchCross : ''};
  ${({ spaceBetweenMain }) => spaceBetweenMain ? Parent.SpaceBetweenMain : ''};
  &, * {
    box-sizing: border-box;
  }

  margin: -${({gap})=> constant.padding[gap]};

  > * {
    padding-top: ${({ gap }) => constant.padding[gap]};
    padding-right: ${({ gap }) => constant.padding[gap]};
    padding-bottom: ${({ gap }) => constant.padding[gap]};
    padding-left: ${({ gap }) => constant.padding[gap]};
    max-width: ${({ per }) => per ? `${(100/per)}%` : 'auto'} !important;
    width: ${({ per }) => per ? `${(100/per)}%` : 'auto'} !important;
  }
`

Flex.defaultProps = {
  gap: '0',
}

Flex.propTypes = {
  parent: PropTypes.bool,
  inline: PropTypes.bool,
  column: PropTypes.bool,
  columnReverse: PropTypes.bool,
  row: PropTypes.bool,
  rowReverse: PropTypes.bool,
  startMain: PropTypes.bool,
  startCross: PropTypes.bool,
  centerMain: PropTypes.bool,
  centerCross: PropTypes.bool,
  endMain: PropTypes.bool,
  endCross: PropTypes.bool,
  wrap: PropTypes.bool,
  stretchCross: PropTypes.bool,
  spaceBetweenMain: PropTypes.bool,

  child: PropTypes.bool,
  noShrink: PropTypes.bool,
  grow: PropTypes.bool,

  per: PropTypes.number,
  gap: PropTypes.oneOf(Object.keys(constant.padding)),
}

export default Flex;