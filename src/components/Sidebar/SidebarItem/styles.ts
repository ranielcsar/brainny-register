import styled from 'styled-components'
import colors from 'styles/colors'
import { NavLink } from 'react-router-dom'

const { accent, gray } = colors

export const Container = styled(NavLink)`
  text-align: center;
  margin-top: 2.1875rem;
  text-decoration: none;
  color: ${gray};
  height: max-content;
  width: 100%;

  & > svg > path {
    fill: ${gray};
  }

  &.selected {
    color: ${accent};
    position: relative;

    & > svg > path {
      fill: ${accent};
    }

    &::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 100%;
      background-color: ${accent};
      border-radius: 30px;
      left: 0;
    }
  }
`

export const Label = styled('p')`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  color: inherit;
`

export const Divider = styled('div')`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  margin-top: 2.1875rem;
`
