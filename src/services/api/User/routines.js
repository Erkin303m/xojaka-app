import { createRoutine, promisifyRoutine } from 'redux-saga-routines'

export const inputOutput = createRoutine('INPUT_OUTPUT');
export const setAll = createRoutine('SET_ALL_LOCAL');
export const signIn = createRoutine(('SIGN_IN'))
export const getMe = createRoutine(('GET_ME'))

export default {
    setAll: promisifyRoutine(setAll),
    inputOutput: promisifyRoutine(inputOutput),
    signIn: promisifyRoutine(signIn),
    getMe: promisifyRoutine(getMe)
}
