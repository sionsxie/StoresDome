/**
 * Created by Love_xie on 2017/7/11.
 */
import * as types from '../redux/actionType'


export function testAction(str) {
    return {
        type:types.TEST_TYPE,
        value:str+'__action'
    }
}