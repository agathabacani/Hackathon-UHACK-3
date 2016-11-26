import React, { Component } from 'react';
import { Button } from '../../../Components';
import { Text, ListView, View } from 'react-native';
import firebase from 'firebase';
import PendingChallenge from './PendingChallenge';
import CompletedChallenge from './CompletedChallenge';

class Tab3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingDataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            completedDataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })

        };
        const {uid} = firebase.auth().currentUser;
        this.challengeRef = firebase.database().ref(`users/${uid}/pendingChallenge`);
        this.completedChallengeRef = firebase.database().ref(`users/${uid}/completedChallenge`);
    }
    componentDidMount() {
        this.listenForChallenges(this.challengeRef);
        this.listenForCompleted(this.completedChallengeRef);
    }
    listenForChallenges(challengeRef) {
        challengeRef.on('value', (snap) => {
            const challenges = [];
            snap.forEach((child) => {
                challenges.push({
                    key: child.key,
                    acceptedOn: child.val().acceptedOn,
                    category: child.val().category,
                    status: child.val().status,
                    task: child.val().task,
                    title: child.val().title
                });
            });
            this.setState({
                pendingDataSource: this.state.pendingDataSource.cloneWithRows(challenges)
            })
        })
    }
    listenForCompleted(completedChallengeRef) {
        completedChallengeRef.orderByChild('status').equalTo('completed').on('value', (snap) => {
            const completed = [];
            snap.forEach((child) => {
                completed.push({
                    key: child.key
                });
            });
            this.setState({
                completedDataSource: this.state.completedDataSource.cloneWithRows(completed)
            })
        })
    }
    renderItem(item) {
        return <PendingChallenge item={item} />
    }
    renderCompletedItem(item){
        return <CompletedChallenge item={item} />
    }
    render() {
        const {container, btnWrapper, pendingList} = styles;
        return (
            <View style={container}>
                <ListView
                    dataSource={this.state.pendingDataSource}
                    renderRow={this.renderItem.bind(this)}
                    enableEmptySections
                    style={pendingList}
                    />
                <ListView
                    dataSource={this.state.completedDataSource}
                    renderRow={this.renderCompletedItem.bind(this)}
                    enableEmptySections
                    style={pendingList}
                    />
            </View>
        );
    }
}
const styles = {
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnWrapper: {
        padding: 10
    },
    pendingList: {
        marginTop: 100
    }
}


export { Tab3 }