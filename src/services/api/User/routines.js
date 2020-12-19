import { createRoutine, promisifyRoutine } from 'redux-saga-routines'

export const getMe = createRoutine(('GET_ME'))

export default {
    getMe: promisifyRoutine(getMe)
}
