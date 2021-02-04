import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import { AuthProvider } from './contexts/auth'

import usePersistedState from './hooks/usePersistedState'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import history from './history'

import Routes from './routes'

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Router history={history}>
            <Routes toggleTheme={toggleTheme} />
          </Router>
        </AuthProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
