import React from 'react';

import { Card as CardComponent } from 'react-native-elements';

const Card = (props) => {
    return (
        <CardComponent
            title={props.title}
            titleStyle={props.titleStyle}
            fontFamily='exo'
        >
            {props.children}
        </CardComponent>
    );
};

export { Card };
