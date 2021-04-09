import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTargetPockemon} from "../thunk/targetPockemon.thunk";
import TargetPockemonComponent from "../component/TargetPockemon.component";
import {targetPockemonSelector} from "../selectors/targetPockemon.selectors";


export default ({route, navigation}) => {

    const dispatch = useDispatch();
    const targetPockemon = useSelector(targetPockemonSelector);

    useEffect(() => {
        dispatch(getTargetPockemon(route.params.url));
    }, [])

    return (
        <TargetPockemonComponent targetPockemon={targetPockemon} navigation={navigation}/>
    )
}
