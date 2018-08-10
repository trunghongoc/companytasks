import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
// BrowserRouter as Router, HashRouter, Switch

import './styles/Main.scss'

// redux
import { Provider } from 'react-redux'
import configureStore from './store/config'
export const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Link to="/">Home</Link>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App
