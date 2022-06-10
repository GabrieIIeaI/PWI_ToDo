import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";

import { addNewTodo } from '../../../actions';
import Buttons from './buttons';

const AddTodoComponent = () => {

    const [text, onChangeText] = useState("");
    const dispatch = useDispatch();
    const addTodo = (value, array) => dispatch(addNewTodo(value, array));

    const createTodoData = () => {
        const obj = {
            id: Math.floor((1 + Math.random()) * 0x10000), 
            todo: text 
        };

        onChangeText("");
        return obj;
    }

    return <View style={styles.headerView}>
        <TextInput 
            style={styles.input} 
            onChangeText={onChangeText}
            value={text}
            placeholder="Sua Tarefa"
        />
        <Buttons onPress={() => addTodo(createTodoData(text))}/> 
    </View>
}

const styles = StyleSheet.create({ 
    headerView: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderRadius: 20,
    }

});

export default AddTodoComponent;