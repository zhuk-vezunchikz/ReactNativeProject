import {getFinished, getPockemonsSuccess, getStarted} from "../actions/pockemons.actions";
import {getPockemonsRequest} from "../../../api/axios";

export const getPockemons = () => (dispatch) => {
    dispatch(getStarted());
    getPockemonsRequest()
        .then(res => {
            dispatch(getPockemonsSuccess(res.data.results));
        })
        .catch(err => {
            alert(err)
        })
    dispatch(getFinished());
}
