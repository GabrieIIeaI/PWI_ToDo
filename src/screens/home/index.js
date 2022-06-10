import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';
import TodoList from './compoents/ToDoList';


export default function Home() {
    return (
        <>
            <TodoList />
        </>
    )
}