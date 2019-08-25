import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import TodoItems from './ToDoItems';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  render () {
    return (
      <div className="App">
        <ToDoList />
        <TodoItems />
      </div>
    );
  }
}

export default App;
