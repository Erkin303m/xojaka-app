import { call, all, put, takeEvery } from 'redux-saga/effects'

import { signIn } from '../routines'
import TokenStorage from '../../../TokenStorage';
import get from 'lodash/get'

function * trigger (api, action) {
    const { request } = action.payload;
    console.log(JSON.stringify(request));
    try {
        yield put(signIn.request());
        const response = yield call(api.user.signIn, request);


        console.log(JSON.stringify(response.data));
        yield all([
            call(TokenStorage.set, get(response, `data.token.token`, "")),
            put(
                signIn.success({
                    request,
                    response
                })
            )
        ])
    } catch (e) {
        console.log(e);
        yield put(signIn.failure(e))
    } finally {
        yield put(signIn.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(signIn.TRIGGER, trigger, api)
}
