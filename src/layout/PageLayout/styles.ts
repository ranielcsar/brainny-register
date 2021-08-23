import styled from 'styled-components'
import Sidebar from 'components/Sidebar'
import colors from 'styles/colors'

const { gray_bg } = colors

export const Container = styled('main')`
  display: grid;
  grid-template-rows: 5rem 1fr;
  grid-template-columns: 1fr;
  min-height: 100vh;
  position: relative;

  background-color: ${gray_bg};

  @media (min-width: 1024px) {
    grid-template-rows: 1fr;
    grid-template-columns: 13% 1fr;
  }

  @media (min-width: 1360px) {
    grid-template-rows: 1fr;
    grid-template-columns: 13rem 1fr;
  }
`

export const StyledSidebar = styled(Sidebar)`
  grid-row: 1;

  @media (min-width: 1024px) {
    grid-row: 1;
    grid-column: 1;
    position: fixed;
  }
`

export const Content = styled('section')`
  grid-row: 2;
  display: flex;
  margin: 7.5rem auto 0;
  width: 90%;

  @media (min-width: 1024px) {
    grid-row: 1;
    grid-column: 2;
  }
`
