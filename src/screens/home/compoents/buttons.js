import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const Buttons = ({name="edit", onPress, size=30, color}) => {
    return <View style={styles.viewMain}>
        <TouchableOpacity onPress={onPress}>
            <Icon name={name} size={size} color={color} />
        </TouchableOpacity>
    </View> 
}

const styles = StyleSheet.create({
    viewMain: {
        backgroundColor: 'red'
    }
})

export default Buttons;