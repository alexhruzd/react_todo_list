import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = ({ todoItems, onDelete, onToggleDone, onToggleImportant }) => {

    const elements = todoItems.map((element) => {

        const { id, ...dataElement } = element;

        return (
            < li key={id} className="list-group-item">
                <TodoListItem
                    {...dataElement}
                    onDelete={() => onDelete(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
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