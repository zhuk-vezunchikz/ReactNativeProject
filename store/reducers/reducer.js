import React from "react";
import {combineReducers} from "redux";
import pockemonsReducer from "../../pages/Pockemons/reducer/pockemons.reducer";
import targetPockemonReducer from "../../pages/TargetPockemon/reducer/targetPockemon.reducer";

const reducer = combineReducers({
    pockemonsReducer,
    targetPockemonReducer
})

export default reducer;
