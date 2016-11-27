import React, { Component } from 'react';
import { Button } from '../../../Components';
import { Text, ListView, View, Image, ScrollView } from 'react-native';
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
                    title: child.val().title,
                    acceptedOn: child.val().acceptedOn,
                    category: child.val().category,
                    status: child.val().status,
                    task: child.val().task,
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
                    key: child.key,
                    title: child.val().title,
                    value: child.val().value,
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
    renderCompletedItem(item) {
        return <CompletedChallenge item={item} />
    }
    render() {
        const {container, btnWrapper, pendingList} = styles;
        return (
            <View style={container}>
                <View style={{position: 'absolute', top: 20, right: 20, flexDirection: 'row', flex: 1,}}>
                    <Text style={{fontFamily: 'montserratlight', fontSize: 16, color: '#fff', }}>Points: <Text style={{fontFamily: 'montserratsemi', color: '#ffb700'}}>10,500</Text></Text>
                </View>
                <Text style={{ fontFamily: 'montserratsemi', color: '#fff', fontSize: 25, marginTop: 65, marginLeft: 15, }}>PENDING</Text>
                <ListView
                    dataSource={this.state.pendingDataSource}
                    renderRow={this.renderItem.bind(this)}
                    enableEmptySections
                    style={[pendingList]}
                    />
                <ScrollView style={{ backgroundColor: '#f6f6f6', zIndex: -2, }}>
                    <Image
                        source={require('../../../Assets/img/divider.png')}
                        resizeMode='cover'
                        />
                    <View style={styles.completedWrapper}>
                        <Image
                            source={require('../../../Assets/img/completed.png')}
                            resizeMode='contain'
                            />
                    </View>
                    <ListView
                        dataSource={this.state.completedDataSource}
                        renderRow={this.renderCompletedItem.bind(this)}
                        enableEmptySections
                        style={{ marginTop: 0, paddingBottom: 70, }}
                        />
                </ScrollView>

            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#3e3e78'
    },
    completedWrapper: {
        alignItems: 'center',
        height: 80,
        marginTop: 20,
    },
    btnWrapper: {
        padding: 10
    },
    pendingList: {
        marginTop: 10
    },
    text: {
        fontFamily: 'montserrat'
    }
}


export { Tab3 }