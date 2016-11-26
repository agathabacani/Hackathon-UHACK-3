import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const SideNavMenu = (props) => {
    const {topRow, container, bottomRow, linkStyle, sideMenuHeader, imgPlacehold} = styles;
    return (
        <View style={container}>
            <View style={sideMenuHeader}>

            </View>
            <View style={topRow}>
                <View style={imgPlacehold}/>
            </View>
            <View style={bottomRow}>
                <Text style={linkStyle} onPress={() => Actions.FirstTab()}>HOME</Text>
                <Text style={linkStyle} onPress={() => Actions.profileScreen()}>ACHIEVEMENTS</Text>
                <Text style={linkStyle} onPress={() => Actions.profileScreen()}>PROFILE</Text>
                <Text style={linkStyle} onPress={() => Actions.profileScreen()}>SETTINGS</Text>
                <Text style={linkStyle} onPress={() => Actions.profileScreen()}>LOGOUT</Text>
            </View>

        </View>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    linkStyle: {
        fontSize: 20,
        color: 'black',
        margin: 5,
     
    },
    sideMenuHeader: {
        flex: 1,
        backgroundColor:'blue'
    },
    topRow: {
        flex: 3,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomRow: {
        flex: 7,
        paddingLeft: 15,
        marginTop: 20
    },
    imgPlacehold: {
        height: 75,
        width: 75,
        backgroundColor: 'red'
    }
}

export default SideNavMenu;
