import React from 'react'
import ReactDOM from 'react-dom'
import AppProvider from './AppProvider'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
