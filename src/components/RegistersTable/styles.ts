import styled from 'styled-components'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

export const Container = styled(TableContainer)``
export const StyledTable = styled(Table)``
export const Row = styled(TableRow)``
export const Body = styled(TableBody)``
export const Head = styled(TableHead)``

export const BodyCell = styled(TableCell)`
  width: 100%;
  border: none;
`

export const HeadCell = styled(TableCell)`
  &&& {
    border: none;
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`
