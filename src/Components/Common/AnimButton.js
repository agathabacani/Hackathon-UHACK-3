import React, { Component } from 'react';
import { Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

class AnimButton extends Component {
    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }
    handlePressIn() {
        Animated.spring(this.animatedValue, {
            toValue: 0.5
        }).start();
    }
    handlePressOut() {
        Animated.spring(this.animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start();
    }
    render() {
        const { button, text, btnWrapper } = styles;
        const animatedStyle = {
            transform: [{ scale: this.animatedValue }]
        }
        return (
            <View style={btnWrapper}>
                <TouchableWithoutFeedback
                    onPress={this.props.onPress}
                    onPressIn={() => this.handlePressIn()}
                    onPressOut={() => this.handlePressOut()}>
                    <Animated.View style={[button, animatedStyle]}>
                        <Text style={text}>{this.props.children}</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = {
    btnWrapper: {
        margin: 10
    },
    button: {
        backgroundColor: 'black',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
};

export { AnimButton };
