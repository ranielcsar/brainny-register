import styled from 'styled-components'
import { InputProps } from './index'
import colors from 'styles/colors'

const { gray_input } = colors

export const Container = styled('div')`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`

export const StyledInput = styled('input').attrs((props: InputProps) => ({
  ...props,
}))`
  all: unset;
  padding: 15px 10px;
  margin-bottom: 2.25rem;
  background-color: ${gray_input};
  outline: none;
  transition: all 0.2s ease;
  font-size: 1.2rem;
`

export const Title = styled('label')`
  margin-bottom: 5px;
  margin-left: 2px;
  transition: all 0.1s;
  font-family: 'Montserrat', sans-serif;
`
