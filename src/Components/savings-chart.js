import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class Chart extends Component {
    render() {
        const chart_wh = 80
        const series = [this.props.val1, this.props.val2, this.props.val3, this.props.val4, this.props.val5]
        const sliceColor = ['#F44336', '#2196F3', '#6a619b', '#6a619b', this.props.color]

        return (
            <PieChart
                chart_wh={chart_wh}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.8}
                coverFill={'#F6F6F6'}
                style={{ zIndex: -5, }}
                />
        );
    }
}