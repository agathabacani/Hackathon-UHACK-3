import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import Chart from '../../../Components/savings-chart';
import Modal from 'react-native-animated-modal';
import Slider from 'react-native-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import Pulse from 'react-native-pulse';
import firebase from 'firebase';

class Tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDraggable: true,

            isInSavings1: false,
            isInSavings2: false,
            isInNew: false,

            dropZoneValues: null,
            dropZoneValues2: null,
            dropZoneValues3: null,

            pan: new Animated.ValueXY(),

            savings1: 500,
            savings2: 120,
            moneyInput: 0,

            pulseMoneyVisible: false,

            iconChosen: 6,

            pendingBalance: '',

        };

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {
                dx: this.state.pan.x,
                dy: this.state.pan.y
            }, () => { this.setState({ pulseMoneyVisible: false }) }]),
            onPanResponderRelease: (e, gesture) => {
                if (this.isDropZone(gesture)) { //Step 1
                    this.setState({
                        isModalVisible: true,
                        isInSavings1: true,
                        pulseMoneyVisible: true,
                    });
                } else if (this.isDropZone2(gesture)) {
                    this.setState({
                        isModalVisible: true,
                        isInSavings2: true,
                        pulseMoneyVisible: true,
                    });
                } else if (this.isDropZone3(gesture)) {
                    this.setState({
                        isModalVisible2: true,
                        isInNew: true,
                    });
                } else {
                    Animated.spring(
                        this.state.pan,
                        { toValue: { x: 0, y: 0 } }
                    ).start();
                }
            }

        });
    }
    renderDraggable() {
        if (this.state.showDraggable) {
            return (
                <View style={styles.draggableContainer}>
                    <Animated.Image
                        {...this.panResponder.panHandlers}
                        source={require('../../../Assets/img/coin.png')}
                        style={[this.state.pan.getLayout(), styles.circle]}>
                        <Text style={styles.text}>{this.state.pendingBalance}</Text>
                    </Animated.Image>
                </View>
            );
        }
    }

    setDropZoneValues(event) {
        this.setState({
            dropZoneValues: event.nativeEvent.layout
        });
    }

    setDropZoneValues2(event) {
        this.setState({
            dropZoneValues2: event.nativeEvent.layout
        });
    }

    setDropZoneValues3(event) {
        this.setState({
            dropZoneValues3: event.nativeEvent.layout
        });
    }

    isDropZone(gesture) {     //Step 2
        var dz = this.state.dropZoneValues;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height && gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width;
    }

    isDropZone2(gesture) {     //Step 2
        var dz = this.state.dropZoneValues2;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height && gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width;
    }

    isDropZone3(gesture) {     //Step 2
        var dz = this.state.dropZoneValues3;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height && gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width;
    }

    renderModalContent() {
        return (
            <View style={[styles.modalContent]}>
                <View style={{ backgroundColor: '#ffb700', flex: 1, padding: 10, height: 70, justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'montserratsemi', color: 'white', fontSize: 23, }}>Save How Much?</Text>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 10, }}>
                    <Slider
                        minimumValue={0}
                        maximumValue={100}
                        onValueChange={(moneyInput) => this.setState({ moneyInput })}
                        value={parseInt(this.state.moneyInput)}
                        step={5} />
                    <Text style={{ fontFamily: 'montserratlight' }}>{this.state.moneyInput}</Text>
                </View>
                {this._renderButton('Save', () => this.setState({ isModalVisible: false }))}
            </View>
        );
    }

    renderModalContent2() {
        return (
            <View style={styles.modalContent}>
                <View style={{ backgroundColor: '#ffb700', flex: 1, padding: 10, height: 70, justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'montserratsemi', color: 'white', fontSize: 23, }}>Create a Goal</Text>
                </View>
                <View style={{ backgroundColor: '#fff', padding: 10, }}>
                    <TextInput placeholder="Goal Title" style={{ fontFamily: 'montserratlight' }} />
                    <Text style={{ fontFamily: 'montserrat', color: 'gray', marginTop: 20, margin: 10, }}>Choose an Icon</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Image
                            source={require('../../../Assets/img/goalOption1.png')}
                            resizeMode='cover'

                            />
                        <Image
                            source={require('../../../Assets/img/goalOption2.png')}
                            resizeMode='cover'
                            />
                        <Image
                            source={require('../../../Assets/img/goalOption3.png')}
                            resizeMode='cover'
                            />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, }}>
                        <Image
                            source={require('../../../Assets/img/goalOption4.png')}
                            resizeMode='cover'
                            />
                        <Image
                            source={require('../../../Assets/img/goalOption5.png')}
                            resizeMode='cover'
                            />
                        <TouchableOpacity onPress={() => this.setState({ iconChosen: 6 })}>
                            <Image
                                source={require('../../../Assets/img/goalOption6.png')}
                                resizeMode='cover'
                                />
                        </TouchableOpacity>
                    </View>
                </View>
                {this._renderButton('Save', () => this.setState({ isModalVisible2: false }))}
            </View>
        );
    }

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={{ fontFamily: 'montserrat', color: '#fff' }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )

    setValue() {
        if (this.state.isInSavings1) {
            this.setState({
                savings1: parseInt(this.state.savings1) + parseInt(this.state.moneyInput),
                pendingBalance: parseInt(this.state.pendingBalance) - parseInt(this.state.moneyInput),
                isInSavings1: false,
            });



            firebase.database().ref('/users/uJ1byzLzRBbr35Ij4CiVfaQrKrb2/bankBalance/pendingBalance').set(this.state.pendingBalance).then(() => {
                var newData = {
                    item1: this.state.savings1
                }
                firebase.database().ref('/users/uJ1byzLzRBbr35Ij4CiVfaQrKrb2/bankBalance/').update(newData);
            })
        } else {
            this.setState({
                savings2: parseInt(this.state.savings2) + parseInt(this.state.moneyInput),
                pendingBalance: parseInt(this.state.pendingBalance) - parseInt(this.state.moneyInput),
                isInSavings2: false,
            });
        }
        Animated.spring(
            this.state.pan,
            { toValue: { x: 0, y: 0 } }
        ).start();
    }

    addGoal() {
        Animated.spring(
            this.state.pan,
            { toValue: { x: 0, y: 0 } }
        ).start();

        return (
            <View style={styles.iconWrapper}>
                <Image
                    source={require('../../../Assets/img/goalOption' + this.state.iconChosen + '.png')}
                    resizeMode='cover'
                    />
            </View>
        )
    }

    renderMoneyPulse() {
        if (this.state.pulseMoneyVisible) {
            return (
                <View style={{ position: 'absolute', top: Window.height / 1.3 - 70, left: Window.width / 2 - 70, zIndex: -1, width: 140, height: 140, }}>
                    <Pulse color='orange' numPulses={3} diameter={140} top={0} speed={20} duration={2000} />
                </View>);
        }
    }

    componentDidMount() {
        const {uid} = firebase.auth().currentUser;
        firebase.database().ref(`/users/${uid}`).on('value', (snap) => {
            this.setState({
                pendingBalance: snap.val().bankBalance.pendingBalance,
                savings1: snap.val().bankBalance.item1,
                savings2: snap.val().bankBalance.item2
            });
        });
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{ position: 'absolute', top: 20, right: 20, flexDirection: 'row', flex: 1, }}>
                    <Text style={{ fontFamily: 'montserratlight', fontSize: 16, color: '#fff', }}>Points: <Text style={{ fontFamily: 'montserratsemi', color: '#ffb700' }}>10,500</Text></Text>
                </View>
                <View style={styles.goalsWrapper}>
                    <Image
                        source={require('../../../Assets/img/goals.png')}
                        resizeMode='cover'
                        />
                </View>
                {/*DropZones*/}
                <View
                    onLayout={this.setDropZoneValues.bind(this)}     //Step 2
                    style={styles.dropZone1}>
                    <Image
                        source={require('../../../Assets/img/goal1.png')}
                        resizeMode='cover'
                        />
                </View>
                <View style={{ position: 'absolute', top: 255, }}>
                    <Text style={{ fontFamily: 'montserrat', color: 'white', fontSize: 20, left: 60 }}>P {this.state.savings1}</Text>
                </View>
                <View
                    onLayout={this.setDropZoneValues2.bind(this)}     //Step 2
                    style={styles.dropZone2}>
                    <Image
                        source={require('../../../Assets/img/goal2.png')}
                        resizeMode='cover'
                        />
                </View>
                <View style={{ position: 'absolute', top: 255, }}>
                    <Text style={{ fontFamily: 'montserrat', color: 'white', fontSize: 20, left: 245 }}>P {this.state.savings2}</Text>
                </View>
                {/*DropZones*/}
                <View style={{ marginTop: 29, marginLeft: 50, position: 'absolute' }}>
                    <Chart val1={123} val2={321} val3={123} val4={900} val5={607} color="#f37a23" />
                </View>
                <View style={{ marginTop: 29, marginLeft: 230, position: 'absolute' }}>
                    <Chart val1={123} val2={221} val3={123} val4={800} val5={607} color="#f38161" />
                </View>
                <View style={styles.addWrapper}
                    onLayout={this.setDropZoneValues3.bind(this)}>
                    <Icon name="ios-add" size={40} color="#fff" />
                </View>

                {/*LegDay*/}
                <View style={{ position: 'absolute', bottom: 0, height: 250, backgroundColor: '#f6f6f6', zIndex: -2 }}>
                    <Image
                        source={require('../../../Assets/img/divider.png')}
                        resizeMode='cover'
                        />
                </View>
                {this.renderDraggable()}
                {this.renderMoneyPulse()}
                <Modal isVisible={this.state.isModalVisible}
                    onModalHide={() => this.setValue()}>
                    {this.renderModalContent()}
                </Modal>

                <Modal isVisible={this.state.isModalVisible2}>
                    {this.renderModalContent2()}
                </Modal>
            </View>
        );
    }
}
let CIRCLE_RADIUS = 45;
let Window = Dimensions.get('window');
const styles = {
    mainContainer: {
        flex: 1,
        backgroundColor: '#3e3e78'
    },
    goalsWrapper: {
        marginTop: 75,
        alignItems: 'center',
    },
    addWrapper: {
        height: 80,
        width: 80,
        position: 'absolute',
        borderRadius: 40,
        top: 280,
        left: (Window.width / 2) - 40,
        borderStyle: 'dotted',
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconWrapper: {
        height: 80,
        width: 80,
        position: 'absolute',
        borderRadius: 40,
        top: 280,
        left: (Window.width / 2) - 40,
        borderStyle: 'dotted',
        borderColor: '#fff',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropZone1: {
        alignSelf: 'center',
        height: 60,
        backgroundColor: '#40396d',
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        position: 'absolute',
        top: 180,
        left: 60,
    },
    dropZone2: {
        alignSelf: 'center',
        height: 60,
        backgroundColor: '#40396d',
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        position: 'absolute',
        top: 180,
        right: 60,
    },
    text: {
        textAlign: 'center',
        color: '#f38161',
        fontSize: 25,
        fontFamily: 'montserrat'
    },
    draggableContainer: {
        position: 'absolute',
        top: Window.height / 1.3 - CIRCLE_RADIUS,
        left: Window.width / 2 - CIRCLE_RADIUS,
    },
    circle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0)',
    },
    button: {
        backgroundColor: '#40396d',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
}


export { Tab1 };

