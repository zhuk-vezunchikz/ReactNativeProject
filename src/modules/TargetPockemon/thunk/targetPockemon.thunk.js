import axios from "axios";
import {targetPockemonAction} from "../actions/targetPockemon.action";

export const getTargetPockemon = (url) => (dispatch) => {
    axios.get(url)
        .then(res => {
            dispatch(targetPockemonAction(res.data));
        })
        .catch(err => {
            alert(err)
        })
}
