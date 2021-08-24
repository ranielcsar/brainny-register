import styled from 'styled-components'
import Loading from 'components/Loading'

export const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const StyledLoading = styled(Loading)`
  &&& {
    margin: 2rem 50%;
  }
`
