import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const SideNavMenu = (props) => {
    const {topRow, container, bottomRow, linkStyle, sideMenuHeader, imgPlacehold} = styles;
    return (
        <View style={container}>
            <View style={sideMenuHeader}>
                <Image
                    source={require('../../Assets/img/unionbanklogo.jpg')}
                    resizeMode='stretch'
                    height={120}
                    />
            </View>
            <View style={topRow}>
                <Image
                    source={require('../../Assets/img/user.png')}
                    resizeMode='contain'
                    style={{ alignSelf: 'center', height: 100, width: 100 }}
                    />
                <Text style={[linkStyle, {fontFamily: 'montserrat', color: '#fff'}]}>Welcome, Reg!</Text>
            </View>
            <View style={bottomRow}>
                <Text style={[linkStyle, {marginBottom: 20}]} onPress={() => Actions.FirstTab()}>HOME</Text>
                <Text style={linkStyle} onPress={() => Actions.achivementScreen()}>ACHIEVEMENTS</Text>
                <Text style={linkStyle} onPress={() => Actions.profileScreen()}>PROFILE</Text>
                <Text style={[linkStyle, {marginBottom: 20}]} onPress={() => Actions.Shop()}>SHOP</Text>
                <Text style={linkStyle} onPress={() => Actions.profileScreen()}>SETTINGS</Text>
                <Text style={linkStyle} onPress={() => Actions.profileScreen()}>LOGOUT</Text>
            </View>

            <TouchableOpacity style={{position: 'absolute', bottom: 15, padding: 10, margin: 15, backgroundColor: '#FE8100', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <Text style={[linkStyle, {fontFamily: 'montserrat', color: '#fff', marginTop: 0,}]}>
                    Donate to a Charity
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    linkStyle: {
        fontSize: 18,
        color: '#1B0D61',
        marginTop: 15,
        fontFamily: 'montserrat'
    },
    sideMenuHeader: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FE8100'
    },
    topRow: {
        flex: 3,
        backgroundColor: '#FE8100',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
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
