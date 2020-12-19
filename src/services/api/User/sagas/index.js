import { all } from "redux-saga/effects";

import inputOutput from './inputOutput';
import setAll from './setAll';
import signIn from "./signIn";
import getMe from "./getMe";

export default function * sagas (api) {
    yield all(
        [
            setAll(api),
            inputOutput(api),
            signIn(api),
            getMe(api)
        ]
    )
}
