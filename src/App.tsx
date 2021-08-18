import { useEffect } from 'react'
import WebFont from 'webfontloader'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './global-style'
import Routes from './routes'

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito:300, 400, 700', 'Montserrat:400, 700, 900'],
      },
    })
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  )
}

export default App
