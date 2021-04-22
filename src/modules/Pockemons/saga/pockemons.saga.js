import {all, call, put, takeEvery} from 'redux-saga/effects';
import {makeRequest} from "../../../api/axios";
import {getPockemonsRequest, getPockemonsSuccess} from "../actions/pockemons.actions";
import {getPockemonsRequestConfig} from "../../../api/issues";

export function* getPockemonsSaga() {
    try {
        const response = yield call(
            makeRequest,
            getPockemonsRequestConfig()
        );

        yield put(getPockemonsSuccess(response.data.results));
    } catch (error) {
        alert('error')
    }
}

export default function* pockemonsSagaWatcher() {
    yield all([
        takeEvery(getPockemonsRequest, getPockemonsSaga)
    ]);
}

