import React from "react";
import {combineReducers} from "redux";
import pockemonsReducer from "../../modules/Pockemons/reducers/pockemons.reducer";
import targetPockemonReducer from "../../modules/TargetPockemon/reducer/targetPockemon.reducer";

const reducer = combineReducers({
    pockemonsReducer,
    targetPockemonReducer
})

export default reducer;
