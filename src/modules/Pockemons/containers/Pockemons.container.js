import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPockemons} from "../thunk/pockemons.thunk";
import PockemonsComponent from "../components/Pockemons.component";
import {getPockemonsList} from "../selectors/targetPockemon.selectors";

export default ({navigation}) => {

    const dispatch = useDispatch();
    const pockemons = useSelector(getPockemonsList);

    useEffect(() => {
        dispatch(getPockemons())
    }, [])

    return (
        <PockemonsComponent navigation={navigation} pockemon={pockemons}/>
    )
}
