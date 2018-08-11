import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// BrowserRouter as Router, HashRouter, Switch, Link

import Window from './watch/window'

// import { Button } from 'antd'
import Navbar from './containers/NavbarTop'
import MainLeft from './containers/MainLeft'
import MainRight from './containers/MainRight'

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
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="row">
                    <div className="mr-t-7"></div>
                    <div className="col col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 pd-r-5 pd-r-15-sm">
                      <MainLeft/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 pd-l-5 pd-l-15-sm">
                      <MainRight/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Window />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App
