import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';


class Spinner extends Component {
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0);
    }
    componentDidMount() {
        this.spin();
    }
    spin() {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin());
    }
    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View style={styles.spinnerStyle}>
                <Animated.Image
                    style={{
                        height: 50,
                        width: 50,
                        transform: [{ rotate: spin }]
                    }}
                    source={require('../../Assets/img/react-js.png')}
                />
            </View>
        );
    }
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
