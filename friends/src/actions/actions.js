import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export const login = creds => dispatch => {
    dispatch ({type: LOGIN_START})
    axios.post('http://localhost:5000/api/login', creds)
    .then(res => {
        console.log("res: ", res)
        localStorage.addItem('token', res.data.payload)
        dispatch({
            type: LOGIN_SUCCESS, 
            payload: res.data
        })
    })
    .catch(err => {
        console.log("err: ", err)
        dispatch ({
            type: LOGIN_FAILURE,
            payload: err.response
        })
    })
}