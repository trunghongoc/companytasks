import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as setWAction from './../actions/window'
import { connect } from 'react-redux'

function mapStateToProps(state: Object): Object {
    return {
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    actions: bindActionCreators(setWAction, dispatch)
  }
}

class Window extends Component {
    componentDidMount() {
        let _this = this
        window.onload = function(e) {
            window.addEventListener('resize', function() {
                let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
                _this.props.actions.actSetWindowSize({width, height})
            })
        }
    }

    render() {
        return(<span></span>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Window)
