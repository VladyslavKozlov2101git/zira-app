
const defaultState = {
    message: ""
}

export const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_SUCCESS_MESSAGE":
            return { ...state, message: "You are succesfully registered! Please wait until admin will check your account." }

        default:
            return state;
    }
}