/**
 * Created by Love_xie on 2017/7/11.
 */
import initialState from './initialState'
import * as types from './actionType'

export default function (state = initialState, action) {
    switch (action.type) {
        case types.TEST_TYPE:
            return {
                ...state,
                value: action.value
            }
            break;
        default:
            return state
            break;
    }

}