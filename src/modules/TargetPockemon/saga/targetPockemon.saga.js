import {all, call, put, takeLatest} from "redux-saga/effects";
import {makeRequest} from "../../../api/axios";
import {targetPockemonAction, targetPockemonRequest} from "../actions/targetPockemon.action";
import {getTargetPockemonRequestConfig} from "../../../api/issues";


export function* getTargetPockemonSaga({payload}) {
    try {
        const response = yield call(
            makeRequest,
            getTargetPockemonRequestConfig(payload.url)
        );
        yield put(targetPockemonAction(response.data))
    } catch (error) {
        console.log('error')
    }
}

export default function* targetPockemonSaga() {
    yield all([
        takeLatest(targetPockemonRequest, getTargetPockemonSaga)
    ]);
}
