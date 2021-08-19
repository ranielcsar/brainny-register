import styled from 'styled-components'
import { ButtonProps } from './index'
import colors from 'styles/colors'

const { accent, white } = colors

export const Container = styled('button').attrs((props: ButtonProps) => ({
  ...props,
}))`
  width: max-content;
  padding: 10px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  outline: none;
  border: ${(props: ButtonProps) => (props.secondary ? `1px solid ${accent}` : 'none')};
  cursor: pointer;
  background-color: ${(props: ButtonProps) => (props.secondary ? white : accent)};
  color: ${(props: ButtonProps) => (props.secondary ? accent : white)};
`

export const Title = styled('p')`
  font-size: 150%;
  line-height: 29px;
  letter-spacing: 0.7px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  z-index: 1;
  color: inherit;
`
