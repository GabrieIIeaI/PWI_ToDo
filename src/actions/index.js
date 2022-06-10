import { ADD_NEW_TODO_LIST, DELETE_TODO } from "./actionTypes" 

export const addNewTodo = (value) => async dispatch => {
    //Adicionar todo
    try {
        dispatch({
            type: ADD_NEW_TODO_LIST,
            todoList: value
        })
    } catch (e) {
        console.warn(e);
    }
}

export const editTodo = (id, value) => {
    //Editar todo
}

export const deleteTodo = (id) => async dispatch => {
    //deletar todo
    console.log(id);
    try {
        dispatch({
            type: ADD_NEW_TODO_LIST,
            id
        })
    } catch (e) {
        console.warn(e);
    }
}