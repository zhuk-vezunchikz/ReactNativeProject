import React, {useEffect, useState} from 'react'
import {View, ScrollView, Button, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getPockemons} from "../../store/actions/actions";

const Pockemons = ({navigation}) => {

    const dispatch = useDispatch();
    const pockemon = useSelector(state => state.pockemonsReducer.pockemons)

    useEffect(() => {
        dispatch(getPockemons())
    }, [])

    return (
        <>
            <ScrollView>
                <View style={styles.main}>
                    {pockemon.map(pockemon => {
                        return <Button key={pockemon.name}
                                       style={styles.button}
                                       color= '#A2C523'
                                       title={pockemon.name.toUpperCase()}
                                       onPress={() => navigation.navigate('TargetPockemon', {
                                           title: pockemon.name,
                                           url: pockemon.url,
                                           styles: styles
                                       })}
                        />
                    })}
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#7D4427',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    button: {
        paddingTop: 10
    }
})

export default Pockemons;
