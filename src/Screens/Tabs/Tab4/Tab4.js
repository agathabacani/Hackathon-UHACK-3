import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';



class Tab4 extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#f6f6f6', }}>
                <View style={{ position: 'absolute', flexDirection: 'row', flex: 1, top: 20, right: 20, zIndex: 5 }}>
                    <Text style={{ fontFamily: 'montserratlight', fontSize: 16, color: '#fff', }}>Points: <Text style={{ fontFamily: 'montserratsemi', color: '#ffb700' }}>10,500</Text></Text>
                </View>
                <View style={{ position: 'absolute', height: 40, backgroundColor: '#3e3e78', width: 600 }} />
                <View style={{ position: 'absolute', top: 40, height: 200, zIndex: -2 }}>
                    <Image
                        source={require('../../../Assets/img/divider.png')}
                        resizeMode='cover'
                        />
                </View>
                <View style={{marginTop: 100, alignSelf: 'center', flexDirection: 'row'}}>
                    <Image
                        source={require('../../../Assets/img/pizza_Place.png')}
                        resizeMode='cover'
                        />
                    <View>
                        <Text style={styles.text}>Total Expense: 2,500</Text>
                        <Text style={styles.text}>Total Profit: 600</Text>
                        <TouchableOpacity>
                            <Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{marginTop: 10, fontFamily: 'montserratsemi', color: '#3e3e78', marginLeft: 20,}}>Buy Ingredients</Text>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        paddingTop: 65,
        marginBottom: 65
    },
    text: {
        fontFamily: 'montserratlight', fontSize: 16, color: 'gray',
        marginTop: 5,
        fontSize: 15,
    }

}

export { Tab4 };
