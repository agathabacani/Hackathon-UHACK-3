import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper'
import PieChart from 'react-native-pie-chart';
<<<<<<< HEAD
=======
import PBC from 'react-native-progress-bar-classic';
>>>>>>> 0f50e74c2810b90e374411734ae30e7c5694d9d7

class Tab2 extends Component {

    render() {
        const {container, topRow, bottomRow, graph, text, pieChartWrapper, leftChart, rightChart, pieChartStyle, scrollDown, pieTxtWrapper, chartWrapper, rowModify, greenBox, yellowBox, titleText} = styles;
        const chart_wh = 100
        const series = [321, 123, 789, 537]
<<<<<<< HEAD
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
=======
        const sliceColor = ['#F44336', '#2196F3', '#48cfad', '#fc6e51', '#FF9800']
        return (
            <View style={container}>
                <ScrollView >
                    <View style={{ marginTop: 40, }} >
                        <Swiper style={styles.wrapper} showsButtons height={300}>
                            <View style={styles.slide1}>
                                <Text style={text}>October</Text>
                                <Image
                                    source={require('../../../Assets/img/graph1.png')}
                                    resizeMode='cover'
                                    style={{ height: 180, width: 180, alignSelf: 'center', marginTop: 15 }}
                                    />
                            </View>
                            <View style={styles.slide2}>
                                <Text style={text}>November</Text>
                                <Image
                                    source={require('../../../Assets/img/graph2.png')}
                                    resizeMode='cover'
                                    style={{ height: 180, width: 180, alignSelf: 'center', marginTop: 15 }}
                                    />
                            </View>
                            <View style={styles.slide3}>
                                <Text style={text}>December</Text>
                                <Image
                                    source={require('../../../Assets/img/graph2.png')}
                                    resizeMode='cover'
                                    style={{ height: 180, width: 180, alignSelf: 'center', marginTop: 15 }}
                                    />
>>>>>>> 0f50e74c2810b90e374411734ae30e7c5694d9d7
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
<<<<<<< HEAD
                                    <Text style={{fontFamily: 'montserratlight', fontSize: 14, }}>Money Earned</Text>
=======
                                    <Text style={{ fontFamily: 'montserratlight', fontSize: 14, }}>Money Earned</Text>
>>>>>>> 0f50e74c2810b90e374411734ae30e7c5694d9d7
                                    <View style={greenBox} />
                                </View>

                                <View style={rowModify}>
<<<<<<< HEAD
                                    <Text style={{fontFamily: 'montserratlight', fontSize: 14, }}>Money Spent</Text>
=======
                                    <Text style={{ fontFamily: 'montserratlight', fontSize: 14, }}>Money Spent</Text>
>>>>>>> 0f50e74c2810b90e374411734ae30e7c5694d9d7
                                    <View style={yellowBox} />
                                </View>

                            </View>
                        </View>
                        <View style={scrollDown}>
<<<<<<< HEAD
                            <Text style={titleText}>Monthly Statistics</Text>
=======
                            <Text style={text}>Monthly Statistics</Text>
                            <View style={{ marginLeft: 25, marginRight: 25, marginTop: 15, }}>
                                <Text style={{ fontFamily: 'montserratlight', color: 'gray', fontSize: 15, marginBottom: 5, }}>Spending Trends</Text>
                                <PBC
                                    valueStyle={'default'}
                                    progress={80}
                                    />
                            </View>
                            <View style={{ marginLeft: 25, marginRight: 25, marginTop: 5, }}>
                                <Text style={{ fontFamily: 'montserratlight', color: 'gray', fontSize: 15, marginBottom: 5, }}>Saving Trends</Text>
                                <PBC
                                    valueStyle={'default'}
                                    progress={40}
                                    />
                            </View>
                            <View style={{ marginLeft: 25, marginRight: 25, marginTop: 5, }}>
                                <Text style={{ fontFamily: 'montserratlight', color: 'gray', fontSize: 15, marginBottom: 5, }}>Ratio</Text>
                                <PBC
                                    valueStyle={'default'}
                                    progress={60}
                                    />
                            </View>
>>>>>>> 0f50e74c2810b90e374411734ae30e7c5694d9d7
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#f6f6f6'
    },
    wrapper: {
<<<<<<< HEAD
        height: 100
=======
        height: 100,
>>>>>>> 0f50e74c2810b90e374411734ae30e7c5694d9d7
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
    slide2: {
        flex: 1,

    },
    slide3: {
        flex: 3,

    },
    text: {
        color: '#3e3e78',
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'montserratsemi'
    },
    pieChartWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    chartWrapper: {
        height: 100,
        width: 100,
    },
    pieTxtWrapper: {
        height: 100,
        width: 150,
<<<<<<< HEAD
        backgroundColor: 'pink',
=======
>>>>>>> 0f50e74c2810b90e374411734ae30e7c5694d9d7
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
<<<<<<< HEAD
        backgroundColor: 'red'
=======
>>>>>>> 0f50e74c2810b90e374411734ae30e7c5694d9d7
    },
    rowModify: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    greenBox: {
        height: 10,
        width: 10,
<<<<<<< HEAD
        backgroundColor: 'green'
=======
        backgroundColor: '#48cfad',
        marginLeft: 10,
        marginTop: 5,
>>>>>>> 0f50e74c2810b90e374411734ae30e7c5694d9d7
    },
    yellowBox: {
        height: 10,
        width: 10,
<<<<<<< HEAD
        backgroundColor: 'yellow'
=======
        backgroundColor: '#fc6e51',
        marginLeft: 15,
        marginTop: 5,
>>>>>>> 0f50e74c2810b90e374411734ae30e7c5694d9d7
    },
    titleText: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '600'
    }
}

export { Tab2 };
