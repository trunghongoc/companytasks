// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
    text: ''
}

const demo = handleActions({
  [ActionTypes.DEMO]: (state: any, action: any): any => {
    return { ...state, text: action.payload.text }
  }
}, initialState)

export default demo
