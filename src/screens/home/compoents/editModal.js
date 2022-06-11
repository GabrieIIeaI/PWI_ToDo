import React, { useEffect, useState } from 'react';
import { Modal, TextInput, StyleSheet, View, Text } from 'react-native';
import { useDispatch } from "react-redux";
import Buttons from './buttons';

import  { editTodo } from '../../../actions';
import { createTodoData, validations } from '../../../utils';

const ModalEditTodo = ({ edit, todoText, closeModal, id }) => {
    
    const [text, onChangeText] = useState(todoText);
    const [error, onChangeError] = useState("");
    const [visibleModal, onChangeVisible] = useState(false);

    const dispatch = useDispatch();
    const editTodoMethod = (id, value) => dispatch(editTodo(id, value));

    useEffect(() => {
        onChangeVisible(edit)
        onChangeText(todoText)
    }, [edit, todoText])

    const EditHandler = () => {
        const isValid = validations(text);

        switch(isValid) {
            case 1: onChangeError("Não é possivel editar para um valor vazio"); break;
            case 2: onChangeError("O seu ToDo deve ter pelo menos 8 letras"); break;
            case 0: editTodoMethod(createTodoData(false, text, id)); onChangeError(""); closeModal(false); break;
        }
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
                <View style={styles.editFilds}>
                    <TextInput 
                        value={text}
                        onChangeText={onChangeText}
                        style={styles.editInput}
                    /> 
                    <Buttons 
                        name={"check"} 
                        size={40}
                        color={'green'} 
                        onPress={() => EditHandler()}
                    />
                 </View>
                 
                {error ? <Text style={styles.errorText}>{error}</Text> : <></>}
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
    editFilds: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
    },
    cardModal: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        height: 150,
        borderRadius: 20,
        backgroundColor: 'white',
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
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold'
    }
})

export default ModalEditTodo;