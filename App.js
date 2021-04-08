import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Pockemons from "./pages/Pockemons/Pockemons";
import {Provider} from "react-redux";
import store from "./store/store";
import TargetPockemon from "./pages/TargetPockemon/TargetPockemon";

export default function App() {

    const Stack = createStackNavigator();

    return (
        <>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: {
                            backgroundColor: '#486B00',
                            height: 120
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        }

                    }}>
                        <Stack.Screen name='Pockemons'
                                      component={Pockemons}/>
                        <Stack.Screen name='TargetPockemon'
                                      component={TargetPockemon}
                                      options={({route}) =>
                            ({title: route.params.title.toUpperCase()})}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>

    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }
        ,
        item: {
            alignItems: 'center',
            justifyContent: 'center',

        }
    }
    )
;
