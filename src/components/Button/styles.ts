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
  border: none;
  cursor: pointer;
  background-color: ${accent};
  color: ${white};
`

export const Title = styled('p')`
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.7px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  z-index: 1;
`
