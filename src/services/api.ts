import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { TOKEN_KEY } from './auth'

const httpLink = createHttpLink({
  uri: 'http://test.frontend.api.brainny.cc/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(TOKEN_KEY)

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const api = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default api
