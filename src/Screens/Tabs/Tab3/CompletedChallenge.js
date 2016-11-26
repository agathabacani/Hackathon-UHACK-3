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
                <Card flexDirection='row'>
                    <View style={styles.todoDesc}>
                        <Text>{this.props.item.key}</Text>
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
