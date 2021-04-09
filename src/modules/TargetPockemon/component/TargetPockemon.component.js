import React from 'react';
import {View, Text, ScrollView, StyleSheet, Button} from "react-native";

const TargetPockemonComponent = ({targetPockemon, navigation}) => {

    return (
        <>
            <ScrollView>
                <View style={styles.main}>
                    <Button title='Return to List'
                            onPress={() => navigation.popToTop()}
                            color='#fff'
                    />
                </View>
                <View style={styles.main}>
                    <View style={styles.container}>
                        <View style={styles.leftItem}>
                            <Text style={styles.leftText}>Name: </Text>
                        </View>
                        <View>
                            <Text style={styles.rightText}>{targetPockemon.name}</Text>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.leftItem}>
                            <Text style={styles.leftText}>
                                Abilities:
                            </Text>
                        </View>
                        <View>
                            {targetPockemon && targetPockemon.abilities && targetPockemon.abilities.map((ab, index) => {
                                return <Text key={index}
                                             style={styles.rightText}>{ab.ability.name} </Text>
                            })}
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.leftItem}>
                            <Text style={styles.leftText}>
                                Base experience:
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.rightText}>
                                {targetPockemon.base_experience}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.leftItem}>
                            <Text style={styles.leftText}>
                                Moves:
                            </Text>
                        </View>
                        <View>
                            {targetPockemon && targetPockemon.moves && targetPockemon.moves.map((item, index) => {
                                return <Text key={index}
                                             style={styles.rightText}>{item.move.name}</Text>
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7D4427'
    },
    container: {
        flexDirection: 'row',
        paddingTop: 10
    },
    leftItem: {
        paddingRight: 10
    },
    leftText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#A2C523'
    },
    rightText: {
        fontSize: 20,
        fontStyle: 'italic',
        color: '#A2C523'
    }
})

export default TargetPockemonComponent;
