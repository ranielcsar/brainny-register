import styled from 'styled-components'
import Sidebar from 'components/Sidebar'
import colors from 'styles/colors'

const { gray_bg } = colors

export const Container = styled('main')`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 10% 1fr;
  min-height: 100vh;
`

export const StyledSidebar = styled(Sidebar)`
  grid-column: 1;
`

export const Content = styled('section')`
  grid-column: 2;
  background-color: ${gray_bg};
  display: flex;
`
