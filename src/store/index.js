import { createStore, combineReducers } from 'redux'
import { registerReducer } from '../store/authReducer'


const rootReducer = combineReducers(
    {message:registerReducer}
)

export const store = createStore(rootReducer)