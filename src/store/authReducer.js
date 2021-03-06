const defaultState = {
    token:localStorage.getItem('token'),
    isAuth:null
}


export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SUCCESS_MESSAGE":
            return { ...state, message: "You are succesfully registered! Please wait until admin will check your account." }

        default:
            return state;
    }
}