import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class Chart extends Component {
    render() {
        const chart_wh = 80
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#F6F6F6', '#F6F6F6', '#f37a23']

        return (
            <PieChart
                chart_wh={chart_wh}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.8}
                coverFill={'#F6F6F6'}
                style={{zIndex: -5,}}
                />
        );
    }
}