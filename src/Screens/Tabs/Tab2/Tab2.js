import React, { Component } from 'react';
import { Text, View, ListView, ScrollView } from 'react-native';
import firebase from 'firebase';
import { List, ListItem } from 'react-native-elements'
import list from '../../../Data/achievementList';
import AchieveItem from './AchieveItem';

class Tab2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
        const {uid} = firebase.auth().currentUser;
        this.achievementsRef = firebase.database().ref('achievements/');
    }
    componentDidMount() {
        this.listenForAchievements(this.achievementsRef);
    }
    listenForAchievements(achievementsRef) {
        achievementsRef.on('value', (snap) => {
            const achievements = [];
            snap.forEach((child) => {
                achievements.push({
                    completed: child.val().completed,
                    title: child.val().title,
                    count: child.val().count,
                    needed: child.val().needed,
                    imgURL: child.val().imgURL,
                    desc: child.val().desc
                });
            });
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(achievements)
            })
        })
    }
    renderItem(item) {
        return <AchieveItem item={item} />
    }
    render() {
        const {container, listWrapper} = styles;
        return (
            <View style={container}>
                <ScrollView style={listWrapper}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem.bind(this)}
                        enableEmptySections
                        />
                </ScrollView>

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
    listWrapper: {
        padding: 20,

    }
}


export { Tab2 };
