import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
<<<<<<< HEAD
    ScrollView
=======
    ScrollView,
    TouchableOpacity
>>>>>>> a558a609e0722aa3f3ae4997576a0f5f6da75292
} from 'react-native';
import Swiper from 'react-native-swiper'
import PieChart from 'react-native-pie-chart';

class Tab4 extends Component {
<<<<<<< HEAD

    render() {
        const {container, topRow, bottomRow, graph, text, pieChartWrapper, leftChart, rightChart, pieChartStyle, scrollDown, pieTxtWrapper, chartWrapper, rowModify, greenBox, yellowBox, titleText} = styles;
        const chart_wh = 100
        const series = [321, 123, 789, 537]
        const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']
        return (
            <View style={container}>
            <ScrollView >
                <View style={topRow} >
                    <Swiper style={styles.wrapper} showsButtons height={300}>
                        <View style={styles.slide1}>
                            <Text style={text}>October</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={text}>November</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={text}>December</Text>
                        </View>
                    </Swiper>
                </View>
                <View style={bottomRow}>
                    <View style={pieChartWrapper}>
                        <View style={chartWrapper}>

                            <PieChart
                                chart_wh={chart_wh}
                                series={series}
                                sliceColor={sliceColor}
                                doughnut={false}
                                coverRadius={0.25}
                                coverFill={'#FFF'}

                                />
                        </View>

                        <View style={pieTxtWrapper}>
                        <View style={rowModify}> 
                             <Text>Money Earned</Text>
                             <View style={greenBox}/>
                        </View>
                           
                            <Text>To</Text>
                             <View style={rowModify}> 
                              <Text>Money Spent</Text>
                             <View style={yellowBox}/>
                        </View>
                           
                        </View>
                    </View>
                    <View style={scrollDown}>
                        <Text style={titleText}>Monthly Statistics</Text>
                    </View>
                </View>
                </ScrollView>
            </View>

=======
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
>>>>>>> a558a609e0722aa3f3ae4997576a0f5f6da75292
        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: 'blue'
    },
    wrapper: {
        height: 100
    },
    topRow: {

    },
    bottomRow: {
        flex: 2
    },
    imgStyle: {
        height: 200,
        width: 350
    },
    graph: {
        height: 200,
        width: 300,
        backgroundColor: 'black',
        alignSelf: 'center'
    },
<<<<<<< HEAD
    slide1: {
=======
    text: {
        fontFamily: 'montserratlight', fontSize: 16, color: 'gray',
        marginTop: 5,
        fontSize: 15,
    }
>>>>>>> a558a609e0722aa3f3ae4997576a0f5f6da75292

        flex: 1,

    },
    slide2: {
        flex: 1,

    },
    slide3: {
        flex: 3,

    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    pieChartWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    chartWrapper: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    pieTxtWrapper: {
        height: 100,
        width: 150,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        margin: 10
    },
    pieChartStyle: {
        height: 70,
        width: 70
    },
    scrollDown: {
        flex: 1,
        marginTop: 20,
        height: 300,
        backgroundColor: 'red'
    },
    rowModify: {
        flexDirection: 'row'
    },
    greenBox: {
        height: 10,
        width: 10,
        backgroundColor: 'green'
    },
        yellowBox: {
        height: 10,
        width: 10,
        backgroundColor: 'yellow'
    },
    titleText: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '600'
    }
}

export { Tab4 };
