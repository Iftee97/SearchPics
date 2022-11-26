import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ImagesContextProvider } from './context/ImagesContext'

ReactDOM.render(
  <ImagesContextProvider>
    <App />
  </ImagesContextProvider>,
  document.getElementById('root')
)
