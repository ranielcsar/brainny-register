import styled from 'styled-components'
import Button from 'components/Button'

export const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const RegisterButton = styled(Button).attrs((props: any) => ({ ...props }))`
  align-self: flex-end;
  margin-bottom: 3rem;
`
