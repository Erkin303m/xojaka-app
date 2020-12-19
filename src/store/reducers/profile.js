import {
    setAll,
    inputOutput,
    signIn,
    getMe
} from 'services/api/User/routines';
import get from 'lodash/get'
import uniqBy from "lodash/uniqBy";
import { LOGOUT, SET_URL } from "../constants";
import TokenStorage from 'services/TokenStorage'
import config from "../../services/config";
import {Api} from "../../services/api";

const initial = {
    unSendActions: [],
    data: {

    },
    baseUrl: config.API_ROOT
};

export default (state = initial, action) => {
    switch (action.type){
        case signIn.SUCCESS:{
            let data = get(action, 'payload.response.data', {});
            console.log('Login SUCCESS data: ',action.payload.response.data )
            return {
                ...state,
                data
            }
        }
        case getMe.SUCCESS:{
            let data = get(action, 'payload.response.data', {});

            console.log("getMe", data)

            return {
                ...state,
                data
            }
        }
        case inputOutput.SUCCESS:{
            const data = get(action, `payload.response.data`, [])
            console.log("action", data)
            return {
                ...state
            }
        }
        case inputOutput.FAILURE:{
            const data = get(action, `payload.request.data`, [])
            return {
                ...state,
                unSendActions: [...state.unSendActions, data]
            };
        }
        case setAll.SUCCESS:{
            return {
                ...state,
                unSendActions: []
            }
        }
        case setAll.FAILURE:{
            return {
                ...state
            };
        }
        case SET_URL: {
            Api.setBaseURL(action.payload)
            return {
                ...state,
                baseUrl: action.payload
            }
        }
        case LOGOUT: {
            TokenStorage.clear();
            return {
                ...initial,
                baseUrl: state.baseUrl
            }
        }
    }
    return state
}
