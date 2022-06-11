import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import logo from '../../../assets/logo.png';

import AddTodoComponent from './addTodo';

const HeaderList = () => {
    return <View style={styles.headerView}>
        <View style={styles.imgView}>
            <Image source={logo} style={styles.img} />
        </View>
        <AddTodoComponent />
    </View>
}

const styles = StyleSheet.create({ 
    headerView: {
        width: '100%',
        alignItems: 'center',
    },
    imgView: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: "#337ab7"
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    img: {
        marginTop: 20,
        marginBottom: 20
    }
});

export default HeaderList;