import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component {
        completedChallenge() {
        const { uid } = firebase.auth().currentUser;
        const challengeKey = this.props.item.key;

        firebase.database().ref(`users/${uid}/completedChallenge/${challengeKey}`).set({
            completedAt: new Date().toDateString(),
            title: child.val().title,
            status: 'pending',
            acceptedOn: this.props.item.acceptedOn,
            category: this.props.item.category,
            task: this.props.item.task,
        });

        firebase.database().ref(`users/${uid}/pendingChallenge/${challengeKey}`).remove();
    }
    render() {
        return (
            <View>
                <View style={styles.card}>
                    <View style={styles.todoDesc}>
                        <Text style={styles.text}>{this.props.item.title}</Text>
                    </View>
                    <View style={styles.btnGrp}>
                        <Icon name="ios-trash" size={30} color="#fff" />
                        <Icon name="ios-checkmark" size={30} color="#fff" onPress={() => this.completedChallenge()} />
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
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
    },
    btnGrp: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#686099',
    },
    text: {
        fontFamily: 'montserrat'
    }
}
