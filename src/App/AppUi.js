import React from 'react';
import { TodoContext } from '../TodoContetx';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {Modal} from '../Modal'
import {TodoForm} from "../TodoForm"
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI(){
    const {error,
        loading,
        searchedTodos,
        completeTodo,
        DeleteTodo,
        openModal,
        setOpenModal

        } = React.useContext(TodoContext);
    return (
        <React.Fragment>            
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {error && <TodosError />}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}
                
                {searchedTodos.map(todo => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => DeleteTodo(todo.text)}
            />
            ))}
        </TodoList>
            
            {!! openModal && (
                <Modal>
                <TodoForm/>
                </Modal>
            )}
        <CreateTodoButton 
        setOpenModal={setOpenModal}
        
        />
        </React.Fragment>
    )
}
export {AppUI}




