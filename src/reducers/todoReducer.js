const initialState = { ToDos: [{id: 1, todo: "Ir ao mercado"}] }
import { ADD_NEW_TODO_LIST, EDIT_TODO, DELETE_TODO } from "../actions/actionTypes";

export const todoListReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_TODO_LIST:
            return {
                ...state,
                ToDos: [...state.ToDos, action.todoList]
            };
        case EDIT_TODO:
            return {
                ...state,
                ToDos: action.todoList
            };
        case DELETE_TODO:
            return {
                ...state,
                ToDos: state.ToDos.filter(({id}) => id !== action.id)
            }
        default:
            return state;
    }
}