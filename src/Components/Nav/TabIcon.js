import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = (props) => (
    <View>
        <Icon name={iconType(props.tabID)} size={20} color="white" style={{ color: props.selected ? '#fc2632' : 'white' }} />
        <Text style={{ color: props.selected ? 'red' : 'white' }}>{props.title}</Text>
    </View>
);

iconType = function(x) {
    if(x == 1){
        return "md-home";
    }
    else if(x == 2) {
        return "md-call";
    }
    else if(x == 3){
        return "ios-paper";
    }
    else {
        return "ios-paper";
    }
}

export { TabIcon };
