import * as ActionTypes from './action_types'

export function actDemo(value = null) {
    return {
        type: ActionTypes.DEMO,
        payload: value
    }
}
