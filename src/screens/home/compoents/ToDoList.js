import React from "react";
import { FlatList, Text } from 'react-native';
import { useSelector } from "react-redux";

import RenderList from "./renderList";
import HeaderList from "./headerList";
const teste = { id: 1, todo: "Fazer Algo" };

const TodoList = () => {
        const Array = useSelector(state => state);
        return <>
            <FlatList 
                data={Array.TodoState.ToDos}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <RenderList {...item} />}
                ListHeaderComponent={<HeaderList />}
            />
        </>
    }
  

export default TodoList;