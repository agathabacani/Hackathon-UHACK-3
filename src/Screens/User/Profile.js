import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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
                        <Image
                            source={require('../../Assets/img/vault.png')}
                            resizeMode='cover'
                            style={{ height: 75, width: 75, marginBottom: 15, }}
                            />
                        <Text style={styles.text1}>VAULT</Text>
                        <Text style={styles.text2}>{this.state.totalBalance}</Text>
                    </View>
                    <View style={imgWrap}>
                        <Image
                            source={require('../../Assets/img/coins.png')}
                            resizeMode='cover'
                            style={{ height: 75, width: 75, marginBottom: 15, }}
                            />
                        <Text style={styles.text1}>BALANCE</Text>
                        <Text style={styles.text2}>{this.state.totalBalance}</Text>
                    </View>
                </View>
<<<<<<< HEAD
                <View style={{ position: 'absolute', top: 210, height: 400, backgroundColor: '#f6f6f6', }}>
                    <Image
                        source={require('../../Assets/img/divider.png')}
                        resizeMode='cover'
                        />
                </View>
                <View style={secondRow}>

                    <View style={avatarWrapper} >
                        <View style={avatar} />
                    </View>
=======
                <View style={imgWrap}>
                     <View style={img}/>
                      <Text>BALANCE</Text>
                       <Text>{this.state.pendingBalance}</Text>
>>>>>>> 878563ac3c6ad1330f5e3028f57ba9a0387a39b2
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        paddingTop: 28,
        flex: 1,
        backgroundColor: '#3e3e78',
    },
    firstRow: {
        flex: 1,
        backgroundColor: '#3e3e78',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    secondRow: {
        flex: 2,
        backgroundColor: 'transparent',
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
    },
    text1: {
        fontFamily: 'montserratsemi',
        color: '#ffb700',
    },
    text2: {
        fontFamily: 'montserratlight',
        color: 'white'
    }
}

export { Profile };
