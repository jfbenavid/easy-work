import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import ErrorBoundary from '../util/error-boundary'
import GlobalStyles from './global-styles'
import { defaultTheme, darkTheme } from './themes'
import { VacancyDescription } from './vacancy-description'

const App = () => {
  const [theme, setTheme] = useState(defaultTheme)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    setTheme(isDarkTheme ? darkTheme : defaultTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <VacancyDescription changeTheme={changeTheme} />
      </ErrorBoundary>
    </ThemeProvider>
  )
}
export default App
