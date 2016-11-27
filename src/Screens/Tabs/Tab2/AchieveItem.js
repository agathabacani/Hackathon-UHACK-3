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
            <View style={{ backgroundColor: count == needed ? 'rgba(200,200,200,0.5)' : '#f6f6f6' , flex: 1, flexDirection: 'row', height: 120, }}>
                <View style={todoDesc}>
                    <Text style={textTitle}>{title}</Text>
                    <Text style={[text, {marginTop: 5,}]}>Completed: {count}</Text>
                    <Text style={[text, {marginBottom: 5,}]}>Needed: {needed}</Text>
                    <PBC
                        valueStyle={'default'}
                        progress={(count/needed)*100}
                        />
                    </View>
                
            <View style={{ backgroundColor: '#f6f6f6', flex: 1, flexDirection: 'row', height: 120, }}>
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
                    <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/odin-test-db-147621.appspot.com/o/icon1.png?alt=media&token=32edfcf1-7d8d-4853-913c-5002562d0eac'}} style={styles.imgWrapper} resizeMode='cover' />
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
        borderRadius: 5,
    },
    flipWrapper: {
        flex: 1,
    },
    imgWrapper: {
        height: 110,
        width: 90
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
        backgroundColor: '#fff',
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