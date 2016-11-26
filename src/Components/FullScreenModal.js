import React from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const FullScreenModal = () => {
    const {container, welcome} = styles;
    return (
        <View style={container}>
            <Text
                style={welcome}>Modal Error</Text>
            <Text style={{color: 'white'}} onPress={() => Actions.pop()}>Close Modal</Text>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    }
}

export { FullScreenModal };