import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        role {
          name
        }
      }
    }
  }
`

export const CREATE_REGISTERED_TIME = gql`
  mutation createRegisteredTime($dateTime: RegisteredTimeInput!) {
    createRegisteredTime(input: { data: $dateTime }) {
      registeredTime {
        id
        timeRegistered
        user {
          id
        }
      }
    }
  }
`

export const GET_REGISTERED_TIMES = gql`
  query registeredTimes {
    registeredTimes {
      id
      timeRegistered
    }
  }
`
