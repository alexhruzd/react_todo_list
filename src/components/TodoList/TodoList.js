import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = ({ todoItems }) => {

    const elements = todoItems.map((element) => {

        const { id, ...dataElement } = element;

        return (
            < li key={id} className="list-group-item">
                <TodoListItem{...dataElement} />
            </li >
        );

    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;