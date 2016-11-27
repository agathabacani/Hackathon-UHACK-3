import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalBalance: '',
            pendingBalance: ''
        }
    }
    componentWillReceiveProps() {

    }
    componentDidMount() {
        const {uid} = firebase.auth().currentUser;
        firebase.database().ref(`/users/${uid}`).on('value', (snap) => {
            this.setState({
                totalBalance: snap.val().bankBalance.totalBalance,
                pendingBalance: snap.val().bankBalance.pendingBalance
            });
        });
    }
    render() {
        const {firstRow, secondRow, imgWrap, img, avatarWrapper, avatar} = styles;
        return (
            <View style={styles.container}>
            <View style={firstRow}>
                <View style={imgWrap}>
                    <View style={img}/>
                    <Text>VAULT</Text>
                      <Text>{this.state.totalBalance}</Text>
                </View>
                <View style={imgWrap}>
                     <View style={img}/>
                      <Text>BALANCE</Text>
                       <Text>{this.state.pendingBalance}</Text>
                </View>
            </View>
            <View style={secondRow}>
                
                 <View style={avatarWrapper} >
                    <View style={avatar} /> 
                 </View>
            </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingTop: 54
    },
    firstRow: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    secondRow: {
        flex: 2,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgWrap: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 75,
        width: 75,
        backgroundColor: 'black'
    },
    avatar: {
        height: 200,
        width: 90,
        backgroundColor: 'black'
    }
}

export { Profile };
