import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
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
        this.achievementsRef = firebase.database().ref('achievements/cleaner');
    }
    componentDidMount() {
        this.listenForAchievements(this.achievementsRef);
    }
    listenForAchievements(achievementsRef) {
        achievementsRef.on('value', (snap) => {
            const achievements = [];
            snap.forEach((child) => {
                achievements.push({
                    progress: child.val().progress,
                    title: child.val().title
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
                <View style={listWrapper}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem.bind(this)}
                        enableEmptySections
                        />

                   
                </View>

            </View>

        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listWrapper: {
        padding: 20,
        width: 320,
        elevation: 5,

    }
}


export { Tab2 };
