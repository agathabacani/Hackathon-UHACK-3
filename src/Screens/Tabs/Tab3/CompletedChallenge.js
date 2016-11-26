import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component {
    render() {
        return (
            <View>
                <View style={styles.card}>
                    <View style={styles.todoDesc}>
                        <Text style={styles.text}>{this.props.item.title}</Text>
                    </View>
                    <View style={styles.btnGrp}>
                        <Text style={[styles.text, {color: 'white'}]}>{this.props.item.value}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    todoDesc: {
        flex: 2,
        justifyContent: 'center',
        padding: 15,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#f6f6f6',
        marginTop:15,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
        elevation: 2,
    },
    btnGrp: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffb700',
    },
    text: {
        fontFamily: 'montserrat'
    }
}
