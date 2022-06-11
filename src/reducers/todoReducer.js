import update from "react-addons-update";
import { ADD_NEW_TODO_LIST, EDIT_TODO, DELETE_TODO } from "../actions/actionTypes";

const initialState = { ToDos: [] }

const todoListReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_TODO_LIST:
            return {
                ...state,
                ToDos: [...state.ToDos, action.todoList]
            };
        case EDIT_TODO:
            return { ToDos: state.ToDos.map((item) => (
                item.id === action.id ? { ...item, todo: action.todoList.todo } : item
            ))}
        case DELETE_TODO:
            return {
                ...state,
                ToDos: state.ToDos.filter((item) => item.id !== action.id)
            }
        default:
            return state;
    }
}

export default todoListReducer;