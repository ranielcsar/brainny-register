import styled from 'styled-components'
import Button from '../Button'

export const Content = styled('div')`
  width: 20rem;
  max-width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`

export const Header = styled('h1')`
  padding: 15px 20px;
  border-bottom: 1px solid #363636;
  text-align: left;
  font-size: 17px;
  font-weight: 300;
`

export const MiddleContainer = styled('div')`
  flex: 2;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #363636;

  padding: 30px 40px;
`

export const UserInfos = styled('section')``

export const Role = styled('h5')`
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;
  margin-bottom: 15px;
`

export const Name = styled('h3')`
  font-weight: 300;
  font-size: 30px;
  line-height: 28px;
`

export const FormContainer = styled('div')``

export const Footer = styled('footer')`
  flex: 0.2;
  display: flex;
  margin: auto;

  padding: 5px 0;
`

const StyledButton = styled(Button)`
  height: 45px;
  align-self: center;
`

export const SaveButton = styled(StyledButton)`
  margin-right: 20px;
`

export const CancelButton = styled(StyledButton)``
