import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const SideNavMenu = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.linkStyle} onPress={() => Actions.FirstTab()}>TAB HOME</Text>
            <Text style={styles.linkStyle} onPress={() => Actions.profileScreen()}>PROFILE</Text>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    linkStyle: {
        fontSize: 20,
        color: 'white'
    }
}

export default SideNavMenu;
