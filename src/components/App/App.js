import React from 'react';

import AppHeader from '../AppHeader';
import SearchBlock from '../SearchBlock';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';

import './App.css';

class App extends React.Component {

    ids = 10;

    state = {
        todoData: [
            { label: "Learn HTML", important: false, done: false, id: 1 },
            { label: "Learn JS", important: false, done: false, id: 2 },
            { label: "Learn React", important: false, done: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((elem) => elem.id === id);

            return {
                todoData: [
                    ...todoData.slice(0, index),
                    ...todoData.slice(index + 1)
                ]
            }
        });
    }

    addItem = (text) => {
        console.log(text);
        const item = {
            label: text,
            important: false,
            id: this.ids++
        }

        this.setState(({ todoData }) => {
            return {
                todoData: [
                    ...todoData, item
                ]
            }
        });
    }

    toggleDone = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((elem) => elem.id === id);
            
            const oldObj = todoData[index];
            const newObj = {...oldObj, done: !oldObj.done};
            
            return {
                todoData: [
                    ...todoData.slice(0, index),
                    newObj,
                    ...todoData.slice(index + 1)
                ]
            }
        });
    }

    toggleImportant = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((elem) => elem.id === id);

            const oldObj = todoData[index];
            const newObj = { ...oldObj, important: !oldObj.important };

            return {
                todoData: [
                    ...todoData.slice(0, index),
                    newObj,
                    ...todoData.slice(index + 1)
                ]
            }
        });
    }

    render() {

        const done = this.state.todoData.filter((el) => el.done).length;
        const todo = this.state.todoData.length - done;

        return (
            <div className="App">
                <AppHeader
                    toDo={todo}
                    done={done}
                />
                <SearchBlock />
                <TodoList
                    todoItems={this.state.todoData}
                    onDelete={this.deleteItem}
                    onToggleDone={this.toggleDone}
                    onToggleImportant={this.toggleImportant}
                />
                <ItemAddForm
                    onItemAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;
