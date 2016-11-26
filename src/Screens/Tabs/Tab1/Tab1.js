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


class Tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDraggable: true,

            isInSavings1: false,
            isInSavings2: false,

            dropZoneValues: null,
            dropZoneValues2: null,

            pan: new Animated.ValueXY(),

            savings1: 5,
            savings2: 10,
            moneyToSave: 100,
            moneyInput: 0,
        };


        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {
                dx: this.state.pan.x,
                dy: this.state.pan.y
            }]),
            onPanResponderRelease: (e, gesture) => {
                if (this.isDropZone(gesture)) { //Step 1
                    this.setState({
                        isModalVisible: true,
                        isInSavings1: true,
                    });
                } else if (this.isDropZone2(gesture)) {
                    this.setState({
                        isModalVisible: true,
                        isInSavings1: true,
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
                        <Text style={styles.text}>{this.state.moneyToSave}</Text>
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

    isDropZone(gesture) {     //Step 2
        var dz = this.state.dropZoneValues;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height && gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width;
    }

    isDropZone2(gesture) {     //Step 2
        var dz = this.state.dropZoneValues2;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height && gesture.moveX > dz.x && gesture.moveX < dz.x + dz.width;
    }

    renderModalContent() {
        return (
            <View style={styles.modalContent}>
                <Slider
                    minimumValue={1}
                    maximumValue={100}
                    onValueChange={(moneyInput) => this.setState({ moneyInput })}
                    value={parseInt(this.state.moneyInput)}
                    step={5} />
                <Text>{this.state.moneyInput}</Text>
                {this._renderButton('Save', () => this.setState({ isModalVisible: false }))}
            </View>
        );
    }

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    )

    setValue() {
        if (this.state.isInSavings1) {
            this.setState({
                savings1: parseInt(this.state.savings1) + parseInt(this.state.moneyInput),
                moneyToSave: parseInt(this.state.moneyToSave) - parseInt(this.state.moneyInput),
                isInSavings1: false,
            });
        } else {
            this.setState({
                savings2: parseInt(this.state.savings2) + parseInt(this.state.moneyInput),
                moneyToSave: parseInt(this.state.moneyToSave) - parseInt(this.state.moneyInput),
                isInSavings2: false,
            });
        }
        Animated.spring(
            this.state.pan,
            { toValue: { x: 0, y: 0 } }
        ).start();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
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
                    <Text style={styles.text}>{this.state.savings1}</Text>
                </View>
                <View
                    onLayout={this.setDropZoneValues2.bind(this)}     //Step 2
                    style={styles.dropZone2}>
                    <Text style={styles.text}>{this.state.savings2}</Text>
                </View>
                {/*DropZones*/}
                <View style={{ marginTop: 29, marginLeft: 50, position: 'absolute' }}>
                    <Chart />
                </View>
                <View style={{ marginTop: 29, marginLeft: 230, position: 'absolute' }}>
                    <Chart />
                </View>

                {/*LegDay*/}
                <View style={{ position: 'absolute', bottom: 0, height: 250, backgroundColor: '#f6f6f6' }}>
                    <Image
                        source={require('../../../Assets/img/divider.png')}
                        resizeMode='cover'
                        />
                </View>
                {this.renderDraggable()}
                <Modal isVisible={this.state.isModalVisible}
                    onModalHide={() => this.setValue()}>
                    {this.renderModalContent()}
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
    dropZone1: {
        alignSelf: 'center',
        height: 60,
        backgroundColor: '#2c3e50',
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
        backgroundColor: '#2c3e50',
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
        fontSize: 30,
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
        padding: 22,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0)',
    },
    button: {
        backgroundColor: 'lightgray',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    }
}

export { Tab1 };