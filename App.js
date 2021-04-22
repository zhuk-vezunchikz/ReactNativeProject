import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider} from "react-redux";
import store from "./src/store/store";

import PockemonsComponent from "./src/modules/Pockemons/containers/Pockemons.container";
import TargetPockemonComponent from "./src/modules/TargetPockemon/container/TargetPockemon.container";

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
                                      component={PockemonsComponent}/>
                        <Stack.Screen name='TargetPockemon'
                                      component={TargetPockemonComponent}
                                      options={({route}) =>
                            ({title: route.params.title.toUpperCase()})}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>

    );
}
