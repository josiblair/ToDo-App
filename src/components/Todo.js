import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();

        this.state={
            input: ''
        }
    }


    render() {
        console.log(this.state.input)
        return (
            <div className="Todo">
                <h1> Todo </h1>

                <ol className="todo_list">
                    {
                        this.props.todoList.map( (item, i, arr) => {
                            return (
                                <li key={i} onClick={ () => this.props.completeItem(i, item) }>{item}</li>
                            )
                        })
                    }
                </ol>

                <div className="input_container">
                    <input value={this.state.input} onChange={(e) => {
                        this.setState({
                            input: e.target.value
                        }) 
                        }}/>
                    <button onClick={() => {return this.props.addItem(this.state.input)} }>Add</button>
                </div>

            </div>
        )
    }
}

export default Todo;