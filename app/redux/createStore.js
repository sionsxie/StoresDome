/**
 * Created by Love_xie on 2017/7/11.
 */
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../redux/rootReducer'

let middleware = [thunk]

if(__DEV__){
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default()
    middleware = [...middleware,reduxImmutableStateInvariant,logger]
}else{
    middleware = [...middleware]
}

export default function configureStore (initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}