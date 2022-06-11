import React, { useEffect, useState } from 'react';
import { Modal, TextInput, StyleSheet, View  } from 'react-native';
import { useDispatch } from "react-redux";
import Buttons from './buttons';

import  { editTodo } from '../../../actions';


const ModalEditTodo = ({ edit, todoText, closeModal, id }) => {
    
    const [text, onChangeText] = useState(todoText);
    const [visibleModal, onChangeVisible] = useState(false);

    const dispatch = useDispatch();
    const editTodoMethod = (id, value) => dispatch(editTodo(id, value));

    useEffect(() => {
        onChangeVisible(edit)
        onChangeText(todoText)
    }, [edit, todoText])

    const createTodoData = () => {
        const obj = {
            id: id, 
            todo: text 
        };

        onChangeText("");
        return obj;
    }

    return <Modal 
        visible={visibleModal} 
        animationType="slide" 
        transparent={true}
    >
        <View style={styles.modalBG}>
        <Buttons 
            style={styles.closeButton} 
            name={'close'} 
            size={40}
            color={'red'} 
            onPress={() => { closeModal(false) }} 
        />
            <View style={styles.cardModal}>
                <TextInput 
                    value={text}
                    onChangeText={onChangeText}
                    style={styles.editInput}
                /> 
                <Buttons 
                    name={"check"} 
                    size={40}
                    color={'green'} 
                    onPress={() => { 
                        editTodoMethod(createTodoData())
                        closeModal(false);
                    }}
                 />
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    modalBG: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .9)',
        justifyContent: 'center',         
    },
    cardModal: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        height: 150,
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    editInput: {
        width: '70%',
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20
    },
    buttonsView: {
        width: '30%',
        marginTop: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginRight: 40,
        marginBottom: 5
    }
})

export default ModalEditTodo;