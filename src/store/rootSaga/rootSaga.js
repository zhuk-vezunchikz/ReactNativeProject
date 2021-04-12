import {all} from 'redux-saga/effects';
import pockemonsSagaWatcher from "../../modules/Pockemons/saga/pockemons.saga";
import targetPockemonSaga from "../../modules/TargetPockemon/saga/targetPockemon.saga";


export default function* rootSaga() {
    yield all([pockemonsSagaWatcher(), targetPockemonSaga()]);
}
