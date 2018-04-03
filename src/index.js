import React from 'react'
import ReactWebComponent from 'react-web-component'
import './index.css'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker'

ReactWebComponent.create(<App />, 'my-component')
registerServiceWorker()

document.getElementById('root').innerHTML = "<my-component></my-component>"
