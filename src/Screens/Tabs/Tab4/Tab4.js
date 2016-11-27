import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';



class Tab4 extends Component {
    get cards() {
        return [
            (
                <View>
                    <Text onPress={ () => getNextCard()}>This is the first step.</Text>
                </View>
            ),
            (
                <View>
                    <Text>And this is the second.</Text>
                </View>
            ),
            (
                <View>
                    <Text>Success ! This is the last step.</Text>
                </View>
            ),
        ];
    }
    render() {
        return (
            <View style={styles.container}>
                <AnimatedSteps
                    ref={'cardnavigation'}
                    cards={this.cards}
                    />
            </View>

        );
    }
}

const styles = {
    container: {
        paddingTop: 65,
        marginBottom: 65
    },

}

export { Tab4 };
