import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import  { deleteTodo } from '../../../actions';
import Buttons from './buttons';

const RenderList = ({ id, todo }) => {
    
    const dispatch = useDispatch();
    const deleteTodoMethod = (id) => dispatch(deleteTodo(id));
    
    return <>
        <View style={styles.cardView}>
            <Text style={styles.todoText}>{todo}</Text>
            <View style={styles.buttonsView}>
                <Buttons size={40} onPress={() => {console.log("Editar")}} />
                <Buttons size={40} onPress={() => {deleteTodoMethod(id)}} />
            </View>
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
        backgroundColor: 'gray',
        alignSelf: "center",
        width: "90%",
        height: 1
    },
    todoText: {
        fontSize: 16,
        color: 'blue'
    },
    buttonsView: {
        height: 20,
        width: '20%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})

export default RenderList;