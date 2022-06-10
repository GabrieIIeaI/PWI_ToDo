import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import AddTodoComponent from './addTodo';

const HeaderList = ({ title }) => {
    return <View style={styles.headerView}>
        <Text style={styles.title}>{title}</Text>
        <AddTodoComponent />
    </View>
}

const styles = StyleSheet.create({ 
    headerView: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
});

export default HeaderList;