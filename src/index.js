import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';


const defaultState = {
    message: ""
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SUCCESS_MESSAGE":
            return { ...state, message: "You are succesfully registered! Please wait until admin will check your account." }

        default:
            return state;
    }
}

const store = createStore(reducer)



const application = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>




)

ReactDOM.render(application, document.getElementById('root'));
