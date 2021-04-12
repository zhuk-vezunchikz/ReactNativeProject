import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PockemonsComponent from "../components/Pockemons.component";
import {getPockemonsList} from "../selectors/targetPockemon.selectors";
import {getPockemonsRequest} from "../actions/pockemons.actions";

export default ({navigation}) => {

    const dispatch = useDispatch();
    const pockemons = useSelector(getPockemonsList);

    useEffect(() => {
        dispatch(getPockemonsRequest())
    }, [])

    return (
        <PockemonsComponent navigation={navigation} pockemon={pockemons}/>
    )
}
