import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserProvider from "./providers/UserProvider"
import * as serviceWorker from './serviceWorker'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, } from "react-router-dom"


ReactDOM.render(
  <UserProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</UserProvider>,
 document.getElementById('root')
 )


serviceWorker.unregister()
