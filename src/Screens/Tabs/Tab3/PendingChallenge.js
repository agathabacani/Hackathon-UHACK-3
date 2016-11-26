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
            text: 'Filler Text'
        });

        firebase.database().ref(`users/${uid}/pendingChallenge/${challengeKey}`).remove();
    }
    render() {
        return (
            <View>
                <Card flexDirection='row'>
                    <View style={styles.todoDesc}>
                        <Text>{this.props.item.key}</Text>
                    </View>
                    <View style={styles.btnGrp}>
                        <Icon name="ios-trash" size={30} color="black" />
                        <Icon name="ios-checkmark" size={30} color="black" onPress={() => this.completedChallenge()} />
                    </View>
                </Card>
            </View>
        );
    }
}

const styles = {
    todoDesc: {
        flex: 2
    },
    btnGrp: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around'
    }
}
