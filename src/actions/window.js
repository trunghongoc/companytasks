import * as ActionTypes from './action_types'

export function actSetWindowSize(value = null) {
    return {
        type: ActionTypes.SET_WINDOW_SIZE,
        payload: value
    }
}

export function actGetWindowSize(value = null) {
    return {
        type: ActionTypes.GET_WINDOW_SIZE,
        payload: value
    }
}
