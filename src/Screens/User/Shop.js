import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

class Shop extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{ position: 'absolute', bottom: 0, height: 250, backgroundColor: '#f6f6f6', zIndex: -2 }}>
                    <Image
                        source={require('../../../Assets/img/divider.png')}
                        resizeMode='cover'
                        />
                        
                </View>
            </View>
        );
    }
}

export { Shop };
