import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper'
import PieChart from 'react-native-pie-chart';

class Tab4 extends Component {

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
    slide1: {

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
