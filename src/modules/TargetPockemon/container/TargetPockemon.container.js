import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TargetPockemonComponent from "../component/TargetPockemon.component";
import {targetPockemonSelector} from "../selectors/targetPockemon.selectors";
import {targetPockemonRequest} from "../actions/targetPockemon.action";


export default ({route, navigation}) => {

    const dispatch = useDispatch();
    const targetPockemon = useSelector(targetPockemonSelector);

        const {url} = route.params;

    useEffect(() => {
        dispatch(targetPockemonRequest({url}));
    }, [])

    return (
        <TargetPockemonComponent targetPockemon={targetPockemon} navigation={navigation}/>
    )
}
