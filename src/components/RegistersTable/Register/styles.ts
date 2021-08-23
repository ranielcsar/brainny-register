import styled from 'styled-components'
import colors from 'styles/colors'
import { TableCell } from '@material-ui/core'
import Time from 'react-time-format'

const { white, accent_2, gray_2 } = colors

export const Container = styled(TableCell)`
  background: ${white};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: none;
  position: relative;
  margin-bottom: 35px;

  &&& {
    display: flex;
    flex-direction: column;
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
    top: 40%;
  }

  @media (min-width: 768px) {
    max-height: 75px;

    &::before {
      top: unset;
    }

    &&& {
      flex-direction: row;
    }
  }
`

export const PersonalInfos = styled('section')`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    margin-left: 60px;
    text-align: left;
  }
`

export const Name = styled('p')`
  font-size: 20px;
`
export const Id = styled('p')`
  font-size: 12px;
`

export const Date = styled(Time)`
  font-size: 20px;
  color: ${gray_2};
  margin: 10px 0;
`

export const Hour = styled('p')`
  font-size: 35px;
  line-height: 53px;
  letter-spacing: 0.02em;
  color: ${gray_2};
`
