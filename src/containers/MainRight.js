import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    render() {
        let height = (this.props.windowSize.height - 65) + 'px'
        return(
            <div className="main-right" style={ {height: height} }>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRight)
