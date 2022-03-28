import React from 'react';
import './TodoItem.css';
import { MdDelete } from 'react-icons/md';
import { BsCheck2All } from 'react-icons/bs';


    function TodoItem(props) {
    return (    
        <li className="TodoItem">
        <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 

        onClick={props.onComplete}
        >
            <BsCheck2All/>
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
        </p>
        <span 
        className="Icon Icon-delete"
        
        onClick={props.onDelete}
        >
            <MdDelete/>
        </span>
        </li>
    );
    }

export { TodoItem };