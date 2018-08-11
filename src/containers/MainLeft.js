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

class MainLeft extends Component {
    render() {
        let height = (this.props.windowSize.height - 65) + 'px'
        return(
            <div className="main-left" style={ {height: height} }>
                {this.props.windowSize.width}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLeft)
