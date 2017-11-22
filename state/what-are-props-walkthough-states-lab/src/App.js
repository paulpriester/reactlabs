// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends React.Component {

  constructor(){
    super();

      this.state = {
        task: ["first", "second", "third"],
        input: '',
        completed: false
      }
  }

// Establish a function that we are going to be passing
// into the Todo Component.

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      task: this.state.task.concat([this.state.input]),
      input: '',

    })
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  

  }

  render() {

    let tasks = this.state.task.map ((task, index) =>
      <li key= {index}>{task}</li>

      )

    console.log(this.state)
    return (
      <div>

        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <input onChange={(event)=>this.handleChange(event)} />
          <input type="submit"/>
        </form>

          <Todo task = {tasks} />

      </div>
    );
  }
}


// Change the state of both the local component and the parent component
// introduce the local loop and creating a new component to handle the loop
// talk about key in the <li>
// constructor method


export default App;
