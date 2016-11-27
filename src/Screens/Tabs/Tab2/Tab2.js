import React, { Component } from 'react';
import { Text, View, ListView, ScrollView } from 'react-native';
import firebase from 'firebase';


class Tab2 extends Component {
    render() {
        const {container} = styles;
        return (
            <View style={container}>
             TAB 2

            </View>

        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingTop:45,
        backgroundColor: '#3e3e78'
    },
}


export { Tab2 };
