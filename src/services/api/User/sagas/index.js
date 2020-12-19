import { all } from "redux-saga/effects";

import getMe from "./getMe";

export default function * sagas (api) {
    yield all(
        [
            getMe(api)
        ]
    )
}
