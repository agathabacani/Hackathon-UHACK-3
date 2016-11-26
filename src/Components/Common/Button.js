import React from 'react';
import { Button as Btn } from 'react-native-elements';

const Button = (props) => {
    return (
        <Btn
            small={props.small || false}
            onPress={props.onPress}
            title={props.title}
            fontWeight={props.fontWeight || '600'}
            backgroundColor={props.backgroundColor || 'black'}
            borderRadius={props.borderRadius || 5}
            color={props.color || 'white'}
            underlayColor={props.underlayColor || 'transparent'}
        />
    );
};

export { Button };
