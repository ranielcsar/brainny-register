import styled from 'styled-components'
import colors from 'styles/colors'
import { ReactComponent as BrainnyLogo } from 'assets/images/logo.svg'

const { white } = colors

export const Container = styled('aside')`
  width: 100%;
  height: 100%;
  background-color: ${white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1024px) {
    flex-direction: column;
    padding: 20px 15px;
    justify-content: unset;
  }
`

export const Logo = styled(BrainnyLogo)`
  width: 50%;
  height: 65px;

  @media (min-width: 1024px) {
    width: 100%;
    height: 65px;
  }
`

export const Divider = styled('div')`
  @media (min-width: 1024px) {
    width: 100%;
    height: 2px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    margin-top: 2.1875rem;
  }
`
