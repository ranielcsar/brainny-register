import styled from 'styled-components'
import colors from 'styles/colors'
import { TableCell } from '@material-ui/core'

const { white, accent_2, gray_2 } = colors

export const Container = styled(TableCell)`
  background: ${white};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: none;
  position: relative;
  margin-bottom: 35px;
  max-height: 75px;

  &&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 35px;
    background-color: ${accent_2};
    border-radius: 30px;
    left: 25px;
  }
`

export const PersonalInfos = styled('section')`
  display: flex;
  flex-direction: column;
  text-align: left;

  margin-left: 60px;
`

export const Name = styled('p')`
  font-size: 20px;
`
export const Id = styled('p')`
  font-size: 12px;
`

export const Date = styled('p')`
  font-size: 20px;
  color: ${gray_2};
`

export const Hour = styled('p')`
  font-size: 35px;
  line-height: 53px;
  letter-spacing: 0.02em;
  color: ${gray_2};
`
