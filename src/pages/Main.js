import React, { Component } from 'react'
import MainLeft from './../containers/MainLeft'
import MainRight from './../containers/MainRight'

class Main extends Component {
    render() {
        return(
            <div className="row">
                <div className="mr-t-7"></div>
                <div className="col col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 pd-r-5 pd-r-15-sm">
                    <MainLeft/>
                </div>
                <div className="col col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 pd-l-5 pd-l-15-sm">
                    <MainRight/>
                </div>
            </div>
        )
    }
}

export default Main
