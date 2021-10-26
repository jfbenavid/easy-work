import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import ErrorBoundary from '../util/error-boundary'
import GlobalStyles from './global-styles'
import { lightTheme, darkTheme } from './themes'
import { Posts } from './posts'
import { Theme } from './header/theme'
import { LOCAL_STORAGE_IS_DARK_KEY } from '../util/constants'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] =
    useState(localStorage.getItem(LOCAL_STORAGE_IS_DARK_KEY) === 'true' || false)

  const changeTheme = () => {
    localStorage.setItem(LOCAL_STORAGE_IS_DARK_KEY, !isDarkTheme)
    setIsDarkTheme(!isDarkTheme)
  }

  const testdata = [{
    title: 'test ksdjfhlkajhdf alsdjkfh laksjdhf aksdjfh laksdfhkasjh dflkjash flkhsj dflkjha dlkfjhas lkdfjh asldkfjh',
    description: 'test :) kh flaksjdh flkjsadh fkljash dflkjhsdlkfjhlaksjd fhlkajsh dflkhas dkfjlhasd flsad flk shadlfkj salkf askldfh aklsd hklj ',
    url: '#test'
  }, {
    title: 'test',
    description: 'test :)',
    url: '#test'
  }, {
    title: 'test',
    description: 'test :)',
    url: '#test'
  }, {
    title: 'test',
    description: 'test :)',
    url: '#test'
  },
  {
    title: 'test 2',
    description: 'test 2 :)'
  },
  {
    title: 'test 2',
    description: 'test 2 :)'
  },
  {
    title: 'test 2',
    description: 'test 2 :)'
  },
  {
    title: 'test 2',
    description: 'test 2 :)'
  },
  {
    title: 'test 2',
    description: 'test 2 :)'
  },
  {
    title: 'test 2',
    description: 'test 2 :)'
  }]

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ErrorBoundary>
        <Theme handleChangeTheme={changeTheme} isDarkTheme={isDarkTheme} />
        <Posts data={testdata} />
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
