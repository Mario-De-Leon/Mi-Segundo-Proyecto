import React from 'react';
import { TodoProvider } from '../TodoContetx';
import { AppUI } from './AppUi';


// import './App.css';

// const defaulTodos = [
//     { text: 'Cortar cebolla', completed: false },
//     { text: 'Tomar el cursso de intro a React', completed: false },
//     { text: 'Llorar con la llorona', completed: false },
//     { text: 'LALALALAA', completed: false },
// ];


function App(){

    return (
        <TodoProvider>
            <AppUI/>
        </TodoProvider>
        
    );
}

    export default App;