import { AsyncStorage } from 'react-native';
import createDataContext from "./createDataContext";
import TrackApi from "../api/TrackApi";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'clear_err':
            return {...state, errMessage:''};
        case 'error':
            return {...state, errMessage: action.payload};
        case 'signin':
            return {errMessage: '', token: action.payload};
        case 'signout':
            return {token: null, errMessage: ''};
        default:
            return state;
    }
};
{   // try signup
    // Handle Success by updating state and say that we are authenticated
    //if Fails, we probably need to reflect error message to user
}
const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch ({type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('Signup')
    }
};
const signup = (dispatch) => async ({email, password}) => {
        try {
            const response = await TrackApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('TrackList')
        } catch (err) {
            dispatch({type: 'error', payload: 'Something went wrong with Sign up'})
        }
    };

const signin = (dispatch) => async ({email, password}) => {
        try {
            const response = await TrackApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('TrackList')
        } catch (err) {
            dispatch({type: 'error', payload: 'Something went wrong with Sign in'})
        }
};

const signout = (dispatch) => async() => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'})
    navigate('loginFlow');
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_err'})
};

export const {Provider, Context} = createDataContext(authReducer,
    {signin, signup, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errMessage:''});