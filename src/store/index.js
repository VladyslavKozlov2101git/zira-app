import { createStore, combineReducers } from 'redux'
import { registerReducer } from '../store/registartionReducer'


const rootReducer = combineReducers(
    {message:registerReducer}
)

export const store = createStore(rootReducer)