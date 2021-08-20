import { useEffect } from 'react'
import WebFont from 'webfontloader'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './global-style'
import Routes from './routes'
import { ApolloProvider } from '@apollo/client'
import api from 'services/api'
import UserContext from 'context'

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito:300, 400, 700', 'Montserrat:400, 700, 900'],
      },
    })
  }, [])

  return (
    <ApolloProvider client={api}>
      <UserContext>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </UserContext>
    </ApolloProvider>
  )
}

export default App
