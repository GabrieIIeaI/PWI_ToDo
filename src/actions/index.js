import { ADD_NEW_TODO_LIST, DELETE_TODO, EDIT_TODO } from "./actionTypes" 

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

export const editTodo = (value) => async dispatch => {
    //Editar todo
    try {
        console.log(value.todo);
        dispatch({
            type: EDIT_TODO,
            id: value.id,
            todoList: value
        })
    } catch(e) {
        console.warn(e);
    }
}

export const deleteTodo = (id) => async dispatch => {
    //deletar todob v
    try {
        dispatch({
            type: DELETE_TODO,
            id
        })
    } catch (e) {
        console.warn(e);
    }
}