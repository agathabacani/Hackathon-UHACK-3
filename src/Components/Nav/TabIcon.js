import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = (props) => (
    <View style={{}}>
        <Icon name={iconType(props.tabID)} size={20} color="white" style={{ alignSelf:'center', color: props.selected ? '#ffb700' : 'white' }} />
        <Text style={{ color: props.selected ? '#ffb700' : 'white', fontFamily: 'montserratlight', fontSize: 12, }}>{props.title}</Text>
    </View>
);

iconType = function(x) {
    if(x == 1){
        return "md-home";
    }
    else if(x == 2) {
        return "md-code";
    }
    else if(x == 3){
        return "md-alert";
    }
    else {
        return "ios-paper";
    }
}

export { TabIcon };
