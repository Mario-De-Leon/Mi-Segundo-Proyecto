import React from "react";
import { UseLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()
function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = UseLocalStorage('TODOS_V1', []);


    const [state, setState] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length

    let searchedTodos = [];
    if (!state.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase()
            const searchText = state.toLowerCase()
            return todoText.includes(searchText);
        })
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        })
        saveTodos(newTodos)
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text == text);
        const newTodos = [...todos];
        todos[todoIndex].completed = true;
        saveTodos(newTodos)
        // todos[todoIndex] = {
        //     text:todos[todoIndex].text,
        //     completed: true
        // }

    }
    const DeleteTodo = (text) => {
        // formas de eliminar 
        const eliminar = todos.filter((todo) => todo.text !== text)
        saveTodos(eliminar)

        // const todoIndex = todos.findIndex(todo => todo.text == text);    
        // const newTodos = [...todos];
        // newTodos.splice(todoIndex, 1)
        // setTodos(newTodos)
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            state,
            setState,
            searchedTodos,
            completeTodo,
            DeleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export{TodoContext, TodoProvider }