import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { useDispatch } from "react-redux";

import { addNewTodo } from '../../../actions';
import Buttons from './buttons';
import { createTodoData, validations } from '../../../utils';

const AddTodoComponent = () => {

    const [text, onChangeText] = useState("");
    const [error, onChangeError] = useState("");
    const dispatch = useDispatch();
    const addTodo = (value) => dispatch(addNewTodo(value));

    const addTodoHandler = () => {
        const isValid = validations(text);

        switch(isValid) {
            case 1: onChangeError("Não é possivel adicionar valor vazio"); break;
            case 2: onChangeError("O seu ToDo deve ter pelo menos 8 letras"); break;
            case 0: addTodo(createTodoData(true, text)); onChangeError(""); onChangeText(""); break;
        }
    }
    return <View style={styles.headerView}>
        <View style={styles.addTodoView}>
            <TextInput 
                style={styles.input} 
                onChangeText={onChangeText}
                value={text}
                placeholder={"Adicionar uma tarefa"}
            />
            <Buttons
                name='chevron-circle-right'
                size={40}
                color={'#17304d'}
                onPress={() => {addTodoHandler()}}
                />
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : <></>}
    </View>
}

const styles = StyleSheet.create({ 
    headerView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    addTodoView: {
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
        borderColor: '#17304d'
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold'
    }

});

export default AddTodoComponent;