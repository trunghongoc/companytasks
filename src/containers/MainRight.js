import React, { Component } from 'react'
import { connect } from 'react-redux'
import createHistory from "history/createBrowserHistory"

function mapStateToProps(state: Object): Object {
    return {
      windowSize: state.windowSize
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
  }
}

class MainRight extends Component {
    state = {
        history: createHistory()
    }

    render() {
        // console.log('current_locationa:', history.location)
        let height = (this.props.windowSize.height - 65) + 'px'
        return(
            <div className="main-right" style={ {height: height} }>
                <button onClick={this.state.history.goBack}>back</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRight)
