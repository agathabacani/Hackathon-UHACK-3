import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, Button, AnimButton } from '../../../Components';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acctBalance: []
        }
        this.getBalance = this.getBalance.bind(this);
    }
    getBalance() {
        fetch('https://api.us.apiconnect.ibmcloud.com/ubpapi-dev/sb/api/RESTs/getAccount?account_no=100552021249', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'x-ibm-client-secret': 'sD3uJ4vT7wO0vO7iN7pN6qB4yA3nC1oP1cY1wU3uX3bA3vT1cK',
                'x-ibm-client-id': '83993e12-f53a-44c1-9527-570991bd3586',
            },

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <Button onPress={() => Actions.ModalError()} title="Modal" style={{ padding: 5 }} />
                    <Button onPress={() => Actions.error()} title="Error" />
                    <AnimButton>SQUISH</AnimButton>
                    <Text onPress={() => Actions.Tab1_1()}>Go to Tab 1_1</Text>
                </Card>

            </View>
        );
    }
}

export { HomeScreen };

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
