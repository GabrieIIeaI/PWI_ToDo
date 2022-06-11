import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const Buttons = ({name="edit", onPress, size=30, color, style}) => {
    return <View style={style}>
        <TouchableOpacity onPress={onPress}>
            <Icon name={name} size={size} color={color} />
        </TouchableOpacity>
    </View> 
}


export default Buttons;