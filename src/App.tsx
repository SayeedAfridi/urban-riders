import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components'
import { DashboardPage, HomePage, LoginPage, SignUpPage } from './pages'

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
      </Switch>
    </>
  )
}

export default App
