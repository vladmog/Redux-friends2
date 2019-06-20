import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/actions';

let defaultState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

export default function reducer (state = defaultState, action){
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                fetchingFriends: true,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload,
                loggingIn: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                loggingIn: false,
                error: action.payload
            }
        
        default: return state
    }
}