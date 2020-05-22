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
        ],
        detectedText: ''
    };

    search = (arr, detectedText) => {
        if (detectedText.length === 0)
            return arr;

        return arr.filter((el) => {
            return el.label.toUpperCase().indexOf(detectedText.toUpperCase()) > -1;
        });
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

    toggleProp = (id, arr, prop) => {
        const index = arr.findIndex((elem) => elem.id === id);

        const oldObj = arr[index];
        const newObj = { ...oldObj, done: !oldObj.done };

        return [
            ...arr.slice(0, index),
            newObj,
            ...arr.slice(index + 1)
        ];
    }

    toggleDone = (id) => {
        this.setState(({ todoData }) => {

            return {
                todoData: this.toggleProp(id, todoData, 'done')
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

    onSearch = (detectedText) => {
        this.setState({
            detectedText: detectedText
        });
    };

    render() {

        const { todoData, detectedText } = this.state;
        const detectedItems = this.search(todoData, detectedText);

        const done = detectedItems.filter((el) => el.done).length;
        const todo = detectedItems.length - done;

        return (
            <div className="App">
                <AppHeader
                    toDo={todo}
                    done={done}
                />
                <SearchBlock 
                    onSearch={this.onSearch}
                />
                <TodoList
                    todoItems={detectedItems}
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
