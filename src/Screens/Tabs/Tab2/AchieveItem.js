import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import FlipCard from 'react-native-flip-card-view';
class AchieveItem extends Component {
    render() {
        console.log(this.props.imgPath)
        return (
            <View style={styles.cardWrapper}>
                <FlipCard style={{ flex: 1 }}
                    velocity={2} // Velocity makes it move
                    tension={5} // Slow
                    friction={2} // Oscillate a lot
                    renderFront={this._renderFront()}
                    renderBack={this._renderBack()} />
            </View>
        );
    }
    _renderFront() {
        return (
            <View style={{ backgroundColor: 'red', flex: 1, height: 100 }}>
                <Text>{this.props.title}</Text>
                <Text>{this.props.progress}</Text>
                <Image source={this.props.imgPath} style={styles.imgWrapper} resizeMode='stretch'/>
            </View>);
    }
    //Desired screen view method in back page
    _renderBack() {
        return (
            <View style={{ backgroundColor: 'blue', flex: 1, height: 100 }}>
                <Text>{this.props.title}</Text>
            </View>);
    }
}

const styles = {
    face: {
        flex: 1,
        backgroundColor: 'red'
    },
    back: {
        flex: 1,
        backgroundColor: 'blue'
    },
    cardWrapper: {
        height: 70,
        width: 200,
        margin: 5,
        marginLeft: 10
    },
    flipWrapper: {
        flex: 1,
    },
    imgWrapper: {
        height: 30,
        width: 30
    }
}

export default AchieveItem;