import { call, all, put, takeEvery } from 'redux-saga/effects'

import { inputOutput } from '../routines'
import TokenStorage from '../../../TokenStorage';

function * trigger (api, action) {
    const { request } = action.payload;
    console.log(JSON.stringify(request));
    try {
        yield put(inputOutput.request());

        const response = yield call(api.user.inputOutput, request);

        yield all([
            put(
                inputOutput.success({
                    request,
                    response
                })
            )
        ])
    } catch (e) {
        console.log(e);
        yield put(inputOutput.failure({
            request,
            error: e
        }))
    } finally {
        yield put(inputOutput.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(inputOutput.TRIGGER, trigger, api)
}
