import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, Animated, Dimensions, Image } from "react-native";
import {Card} from './index';
import { Button } from './index';
import { Actions } from "react-native-router-flux";

var {
    height: deviceHeight
} = Dimensions.get("window");

class ChallengeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: new Animated.Value(-deviceHeight),
        };
        this.rejectChallenge = this.rejectChallenge.bind(this);
        this.acceptChallenge = this.acceptChallenge.bind(this);
    }
    componentDidMount() {
        Animated.spring(this.state.offset, {
            duration: 150,
            toValue: 0
        }).start();
    }
    rejectChallenge() {
        Animated.spring(this.state.offset, {
            duration: 150,
            toValue: -deviceHeight
        }).start();
        Actions.mainEntryPoint();
    }

    
    acceptChallenge(){
        const {uid} = firebase.auth().currentUser;


     




        firebase.database().ref(`users/${uid}/pendingChallenge`).push({
             acceptedOn: new Date().toDateString(),
             title: this.props.title,
             task: this.props.task,
             category: this.props.category,
             status: 'pending',
             value: this.props.value
             
        })
    }
    render() {
        const {modalWrapper, imgStyle, btnRow, yesBtn, noBtn, challengeText} = styles;
        const imgUrl = this.props.url
        return (
            <Animated.View style={[styles.container, { backgroundColor: "rgba(52,52,52,0)" }, { transform: [{ translateY: this.state.offset }] }]}>
                <View style={modalWrapper}>
                    <Image style={imgStyle} source={{ uri: `${imgUrl}` }} resizeMode='contain' />
                    <Text>{this.props.title}</Text> 
                    <Text style={challengeText}>{this.props.task}</Text>
                    <View style={btnRow}>
                        <View style={yesBtn}>
                            <Text onPress={this.acceptChallenge}>YES</Text>
                        </View>
                        <View style={noBtn}>
                            <Text onPress={this.rejectChallenge}>NO</Text>
                        </View>
                    </View>
                </View>
            </Animated.View>
        );
    }
}

const styles = {
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    modalWrapper: {
        width: 250,
        height: 250,
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    imgStyle: {
        height: 100,
        width: 100,
    },
    btnRow: {
        flexDirection: 'row',
        margin: 5
    },
    yesBtn: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
    },
    noBtn: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
    },
     challengeText: {
         fontWeight: '600',
         alignSelf: 'center',
         padding: 5,
         fontSize: 15
     }
}

export { ChallengeModal };