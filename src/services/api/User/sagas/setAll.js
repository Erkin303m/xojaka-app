import { call, all, put, takeEvery } from 'redux-saga/effects'

import { setAll } from '../routines'
import TokenStorage from '../../../TokenStorage';

function * trigger (api, action) {
    const { request } = action.payload;
    console.log(JSON.stringify(request));
    try {
        yield put(setAll.request());

        const response = yield call(api.user.inputOutput, request);

        yield all([
            put(
                setAll.success({
                    request,
                    response
                })
            )
        ])
    } catch (e) {
        console.log(e);
        yield put(setAll.failure({
            request,
            error: e
        }))
    } finally {
        yield put(setAll.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(setAll.TRIGGER, trigger, api)
}
