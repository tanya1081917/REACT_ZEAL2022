import {
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_LOGIN_SUCCESS,
} from '../Constants/userConstant'
import {API} from "aws-amplify";

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const myAPI = "Registration"
        const path = '/registration/:registerUserName';

        const { data } = await API.post(myAPI, path,{ name, email, password })

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}