// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}

const windowSize = handleActions({
  [ActionTypes.SET_WINDOW_SIZE]: (state: any, action: any): any => {
    return { ...state, width: action.payload.width, height: action.payload.height }
  },
  [ActionTypes.GET_WINDOW_SIZE]: (state: any, action: any): any => {
    return state
  }
}, initialState)

export default windowSize
