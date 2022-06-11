import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";

import  { deleteTodo } from '../../../actions';
import Buttons from './buttons';
import ModalEditTodo from './editModal';

const RenderList = ({ id, todo }) => {
    const [edit, onEditable] = useState(false);

    const dispatch = useDispatch();
    const deleteTodoMethod = (id) => dispatch(deleteTodo(id));

    return <>
        <View style={styles.cardView}>
            <ModalEditTodo edit={edit} todoText={todo} closeModal={onEditable} id={id} />
            <TouchableOpacity onPress={() => { onEditable(true) }}>
                <Text style={styles.todoText}>{todo}</Text>
            </TouchableOpacity>
            <Buttons
                name={"check"} 
                color={"green"}
                size={30} 
                onPress={() => {deleteTodoMethod(id)}}
            />
        </View>
        <View style={styles.divider} />
    </>
}

const styles = StyleSheet.create({
    cardView: {
        marginTop: 5,
        alignSelf: "center",
        width: "90%",
        padding: 20,
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    divider: {
        backgroundColor: '#91be3e',
        alignSelf: "center",
        width: "90%",
        height: 1
    },
    todoText: {
        fontSize: 16,
        color: '#17304d'
    }
})

export default RenderList;