import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

export interface AppProviderProps {}

const AppProvider: React.FC<AppProviderProps> = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  )
}

export default AppProvider
