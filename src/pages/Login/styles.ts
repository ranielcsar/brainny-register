import styled from 'styled-components'
import colors from 'styles/colors'
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { ReactComponent as Vector } from 'assets/images/vector.svg'
import { Form } from '@unform/web'

const { black_bg, white, accent_2 } = colors

export const Container = styled('main')`
  display: grid;
  width: 100%;
  height: 100vh;
  background-color: ${black_bg};
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-gap: 0 5rem;
  overflow: hidden;

  @media (min-width: 1024px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1440px) {
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 5rem;
    align-content: center;
  }
`

export const ApresentationContainer = styled('section')`
  grid-column: 1;
  align-self: center;
  justify-self: center;
  font-family: 'Montserrat';

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1440px) {
    grid-column: 1;
    grid-row: 2;
  }
`
export const BrainnyRegisterLogo = styled(Logo)`
  width: 8.125rem;
  height: 8.125rem;

  @media (min-width: 768px) {
    width: 12.125rem;
    height: 12.125rem;
  }

  @media (min-width: 1024px) {
    width: 15.125rem;
    height: 15.125rem;
  }
`

export const Title = styled('h1')`
  font-weight: bold;
  font-size: 3rem;
  line-height: 126.4%;
  color: ${white};

  @media (min-width: 1024px) {
    font-size: 3.525rem;
    letter-spacing: 0.1rem;
  }

  @media (min-width: 1440px) {
    font-size: 5.525rem;
    letter-spacing: 0.2rem;
  }
`

export const Subtitle = styled('h3')`
  width: max-content;
  font-size: 1rem;
  line-height: 126.4%;
  letter-spacing: 0.2em;
  color: ${accent_2};
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 1rem;
    letter-spacing: 0.3rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.4375rem;
    letter-spacing: 0.43em;
  }
`

export const LoginFormContainer = styled('section')`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 90%;

  @media (min-width: 375px) {
    justify-self: center;
  }

  @media (min-width: 768px) {
    width: 30.125rem;
    height: 30.125rem;
    align-self: center;
    justify-self: center;
  }

  @media (min-width: 1024px) {
    width: 27.125rem;
    height: 27.125rem;
  }

  @media (min-width: 1440px) {
    grid-column: 2;
    grid-row: 2;
    width: 50.0625rem;
    height: 40.6013rem;
    align-self: unset;
    justify-self: unset;
  }
`

export const LoginVector = styled(Vector)`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 1024px) {
    width: 35rem;
    height: 30rem;
    top: -20px;
  }

  @media (min-width: 1440px) {
    top: 0;
    width: 95%;
    height: 95%;
  }
`

export const LoginForm = styled(Form)`
  z-index: 5;
  background-color: ${white};
  height: max-content;
  padding: 30px;
  border-radius: 40px;
  align-self: center;
  width: 95%;
  margin: auto;

  @media (min-width: 1440px) {
    width: 31.9375rem;
    margin-right: 10rem;
  }
`
