import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

class Settings extends Component {
    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.titleText}>Account Settings</Text>
           
            </View>
        );
    }
}

const styles = {
    conatainer: {
        flex: 1,
       backgroundColor: 'red',
       paddingTop: 65
    },


}

export { Settings };
