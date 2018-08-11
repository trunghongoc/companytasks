// @flow
import { combineReducers } from 'redux'
// import app from './app'
import demoReducer from './demo'
import windowSize from './window'

const rootReducer = combineReducers({
    demoReducer,
    windowSize
})

export default rootReducer
