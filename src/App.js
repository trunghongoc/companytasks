import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// BrowserRouter as Router, HashRouter, Switch, Link

import Window from './watch/window'

// import { Button } from 'antd'
import Navbar from './containers/NavbarTop'
import Main from './pages/Main'
import Board from './pages/Board'

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
            <Navbar/>
            <div className="container-fluid">
              <div className="row">
                <div className="col col-12"><div className="mr-t-7"></div></div>
              </div>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/user/cards" component={Board} />
              </Switch>
            </div>
            <Window />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App
