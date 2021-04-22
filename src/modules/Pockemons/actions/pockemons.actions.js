import {createAction} from 'redux-actions';

// export const getPockemonsRequest = () => {
//     return {type: 'GET_POCKEMONS_REQUEST'}
// }
//
// export const getFinished = () => {
//     return {type: "GET_FINISHED"}
// }
//
// export const getPockemonsSuccess = (pockemons) => {
//     return {type: "GET_POCKEMONS_SUCCESS", payload: pockemons}
// }

export const getPockemonsRequest = createAction('GET_POCKEMONS_REQUEST');
export const getFinished = createAction('GET_FINISHED');
export const getPockemonsSuccess = createAction('GET_POCKEMONS_SUCCESS');
