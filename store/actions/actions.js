import axios from 'axios';
import {getFinished, getPockemonsSuccess, getStarted} from "../actionCreators/actionCreator";
import {targetPockemonAC} from "../../pages/TargetPockemon/actionCreator/targetPockemonAC";

export const getPockemons = () => (dispatch) => {
    dispatch(getStarted());
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(res => {
            dispatch(getPockemonsSuccess(res.data.results));
        })
        .catch(err => {
            alert(err)
        })
    dispatch(getFinished());
}

export const getTargetPockemon = (url) => (dispatch) => {
    axios.get(url)
        .then(res => {
            dispatch(targetPockemonAC(res.data));
        })
        .catch(err => {
            alert(err)
        })
}

