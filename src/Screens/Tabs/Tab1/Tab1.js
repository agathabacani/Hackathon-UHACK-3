import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, Button, AnimButton } from '../../../Components';

class Tab1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <Button onPress={() => Actions.ModalError()} title="Modal" style={{padding: 5}} />
                     <Button onPress={() => Actions.error()} title="Error" />
                     <AnimButton>SQUISH</AnimButton>
                     <Text onPress={() => Actions.Tab1_1()}>Go to Tab 1_1</Text>
                </Card>

            </View>
        );
    }
}

export { Tab1 };

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
