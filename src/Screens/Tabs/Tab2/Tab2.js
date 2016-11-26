import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import list from '../../../Data/achievementList';
import AchieveItem from './AchieveItem';
class Tab2 extends Component {

    render() {

        const {container, listWrapper} = styles;
        return (
            <View style={container}>
                <View style={listWrapper}>
                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            list.map((l, i) => (
                                <AchieveItem 
                                    key={i}
                                    title={l.name}
                                    progress={l.progess}
                                    imgPath={l.imgPath}/>
                            ))
                        }
                    </List>
                </View>
                
            </View>

        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listWrapper: {
        padding: 20,
        width: 320,
        elevation: 5,

    }
}


export { Tab2 };
