import React from "react";
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import  { addNewTodo } from '../../../actions';


import RenderList from "./renderList";
import HeaderList from "./headerList";

const TodoList = () => {
    
        const Array = useSelector(state => state);
        const dispatch = useDispatch();
        const addTodo = (value, array) => dispatch(addNewTodo(value, array));

        console.log(Array.TodoState.ToDos);
        return <>
            <FlatList 
                data={Array.TodoState.ToDos}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <RenderList {...item} />}
                ListHeaderComponent={<HeaderList title={"ToDoList Prova"} />}
            />
        </>
    }
  

export default TodoList;