import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import FlipCard from 'react-native-flip-card-view';
import PBC from 'react-native-progress-bar-classic'

class AchieveItem extends Component {


    render() {
        console.log(this.props.item.imgURL)
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
        const {count, needed, item} = this.props.item;
        const {todoDesc, textTitle, btnGrp, text, title} = styles;
        return (
            <View style={{ borderRadius: 10 ,backgroundColor: count == needed ? 'rgba(200,200,200,0.5)' : '#f6f6f6' , flex: 1, flexDirection: 'row', height: 120, }}>
                <View style={styles.todoDesc}>
                    <Text style={styles.textTitle}>{this.props.item.title}</Text>
                    <Text style={[styles.text, { marginTop: 5, }]}>Completed: {this.props.item.count}</Text>
                    <Text style={[styles.text, { marginBottom: 5, }]}>Needed: {this.props.item.needed}</Text>
                    <PBC
                        valueStyle={'default'}
                        progress={(this.props.item.count / this.props.item.needed) * 100}
                        />
                    {/* <Image source={{uri:`${imgPath}`}} style={styles.imgWrapper} resizeMode='stretch' /> */}
                </View>
                <View style={btnGrp}>
                    <Image source={count == needed ? require('../../../Assets/img/trophy_1.png') : require('../../../Assets/img/trophy_2.png') } style={styles.imgWrapper} resizeMode='cover' />
                </View>
            </View>);
    }
    //Desired screen view method in back page
    _renderBack() {
        return (
            <View style={{ backgroundColor: '#e0e0e0', flex: 1, height: 120, justifyContent: 'center', alignItems: 'center', paddingLeft: 15, paddingRight: 15, }}>
                <Text style={{ fontFamily: 'montserrat' }}>{this.props.item.desc}</Text>
            </View>);
    }
}

const styles = {
    face: {
        flex: 1,
        backgroundColor: '#fff'
    },
    back: {
        flex: 1,
        backgroundColor: 'blue'
    },
    cardWrapper: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
    },
    flipWrapper: {
        flex: 1,
    },
    imgWrapper: {
        height: 100,
        width: 70,
    },
    todoDesc: {
        flex: 2,
        justifyContent: 'center',
        padding: 15,
    },
    btnGrp: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        borderRadius: 10,
    },
    textTitle: {
        fontFamily: 'montserratsemi',
        fontSize: 18,
        color: '#3e3e78'
    },
    text: {
        fontFamily: 'montserratlight',
        fontSize: 16,
        color: 'gray'
    }
}

export default AchieveItem;