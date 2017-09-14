import React, { Component } from 'react';
import Todo from './components/Todo';
import Completed from './components/Completed';

class App extends Component {
  constructor() {
    super();

    this.state={
      list: [],
      completed: ['sleep', 'nap']
    }

    this.addItem = this.addItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }

  addItem(val) {
    let todoCopy = this.state.list.slice();
    todoCopy.push(val);
    this.setState({
        list: todoCopy 
    })
}

  completeItem(index, val) {
    let todoCopy = this.state.list.slice();
    todoCopy.splice(index, 1); 

    let completedCopy = this.state.completed.slice();
    completedCopy.push(val);

    this.setState({
      list: todoCopy,
      completed: completedCopy
    })
  }

  render() {
    return (
      <div className="App">
          <Todo todoList ={this.state.list} addItem={this.addItem} completeItem={this.completeItem} />
          <Completed completedList={this.state.completed} />
      </div>
    );
  }
}

export default App;
