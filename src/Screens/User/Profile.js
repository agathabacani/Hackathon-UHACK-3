import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalBalance: ''
        }
    }
    componentWillReceiveProps() {

    }
    componentDidMount() {
        const {uid} = firebase.auth().currentUser;
        firebase.database().ref(`/users/${uid}`).on('value', (snap) => {
            this.setState({
                totalBalance: snap.val().bankBalance.totalBalance
            });
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.totalBalance}</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
}

export { Profile };
