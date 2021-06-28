import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './Actions'

const initialState = {
    loading : false,
    users : [],
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false
            }
        case FETCH_USERS_FAILURE:
            return {
                users: [],
                loading: false,
                error: action.payload
            }
        default: return state
    }
}