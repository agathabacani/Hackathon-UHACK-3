import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import PBC from 'react-native-progress-bar-classic'


class Tab4 extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#f6f6f6', marginBottom: 80,}}>
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
                <View style={{ marginTop: 100, alignSelf: 'center', flexDirection: 'row' }}>
                    <Image
                        source={require('../../../Assets/img/pizza_Place.png')}
                        resizeMode='cover'
                        />
                    <View style={{ marginLeft: 15, marginTop: 30, }}>
                        <Text style={styles.text}>Total Expense: 2,500</Text>
                        <Text style={styles.text}>Total Profit: 600</Text>
                        <TouchableOpacity style={{ backgroundColor: '#ffb700', padding: 5, alignSelf: 'center', margin: 10, }}>
                            <Text style={{ textAlign: 'center', fontFamily: 'montserrat', color: '#fff' }}>View Leaderboards</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ marginTop: 10, fontFamily: 'montserratsemi', color: '#3e3e78', marginLeft: 20, fontSize: 16, }}>Resources Status</Text>
                <View style={{ marginLeft: 25, marginRight: 25, marginTop: 10, }}>
                    <Text style={{ fontFamily: 'montserratlight', color: 'gray', fontSize: 15, marginBottom: 5, }}>Totato Sauce</Text>
                    <PBC
                        valueStyle={'default'}
                        progress={65}
                        />
                </View>
                <View style={{ marginLeft: 25, marginRight: 25, marginTop: 5, }}>
                    <Text style={{ fontFamily: 'montserratlight', color: 'gray', fontSize: 15, marginBottom: 5, }}>Cheese</Text>
                    <PBC
                        valueStyle={'default'}
                        progress={15}
                        />
                </View>
                <View style={{ marginLeft: 25, marginRight: 25, marginTop: 5, }}>
                    <Text style={{ fontFamily: 'montserratlight', color: 'gray', fontSize: 15, marginBottom: 5, }}>Pepper</Text>
                    <PBC
                        valueStyle={'default'}
                        progress={80}
                        />
                </View>
                <Text style={{ marginTop: 20, fontFamily: 'montserratsemi', color: '#3e3e78', marginLeft: 20, fontSize: 16, }}>Buy Ingredients</Text>
                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-around' }}>
                    <View style={{ height: 80, width: 80, }}>
                        <Image
                            source={require('../../../Assets/img/ing1.png')}
                            resizeMode='contain'
                            style={{ height: 80, width: 80, }}
                            />
                    </View>
                    <View style={{ height: 80, width: 80, }}>
                        <Image
                            source={require('../../../Assets/img/ing2.png')}
                            resizeMode='contain'
                            style={{ height: 80, width: 80, }}
                            />
                    </View>
                    <View style={{ height: 80, width: 80, }}>
                        <Image
                            source={require('../../../Assets/img/ing3.png')}
                            resizeMode='contain'
                            style={{ height: 80, width: 80, }}
                            />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-around' }}>
                    <View style={{ height: 80, width: 80, }}>
                        <Image
                            source={require('../../../Assets/img/ing4.png')}
                            resizeMode='contain'
                            style={{ height: 80, width: 80, }}
                            />
                    </View>
                    <View style={{ height: 80, width: 80, }}>
                        <Image
                            source={require('../../../Assets/img/ing5.png')}
                            resizeMode='contain'
                            style={{ height: 80, width: 80, }}
                            />
                    </View>
                    <View style={{ height: 80, width: 80, }}>
                        <Image
                            source={require('../../../Assets/img/ing6.png')}
                            resizeMode='contain'
                            style={{ height: 80, width: 80, }}
                            />
                    </View>
                </View>
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
        fontFamily: 'montserrat', color: '#3e3e78',
        marginTop: 5,
        fontSize: 15,
    }

}

export { Tab4 };
