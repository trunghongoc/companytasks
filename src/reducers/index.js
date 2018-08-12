// @flow
import { combineReducers } from 'redux'

import demoReducer from './demo'
import windowSize from './window'

const rootReducer = combineReducers({
    demoReducer,
    windowSize
})

export default rootReducer
