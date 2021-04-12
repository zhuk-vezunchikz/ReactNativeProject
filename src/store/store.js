import {applyMiddleware, createStore} from 'redux';
import reducer from "./reducers/reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;
