import React from 'react';
import './App.css';
import ListItems from './ListItems';
import ToDoForm from './ToDoForm';

class List extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: ["1st","2nd","rexx", "pojo", "tobey"]
    }

    this.addTodo=this.addTodo.bind(this);
    this.deleteTodo=this.deleteTodo.bind(this);
  }

  addTodo(text){
    //use this 'text' argument 
    //push this 'text' into this.state.todos
    //save new array as updatedArray
    //set state of todos to updatedArray
    const updatedArray=this.state.todos.slice() //makes a copy of todos by using slice
    updatedArray.push(text)
    console.log(updatedArray)
    this.setState({
      todos: updatedArray
    })
  }

  deleteTodo(index){
    //make copy of state
    //filter out the matched index value 
    //delete the matched value
    //use updatedArray to set state
    const updatedArray=this.state.todos.slice()
    let arraywithoutdeletedtodo = updatedArray.filter((text, i)=> i !== index)
    this.setState({
      todos: arraywithoutdeletedtodo
    })

  }

  render() {

    return (
      <div className="App">
        <h1>2020's To Do List:</h1>
          <ToDoForm addTodo={this.addTodo}/>
          <ListItems todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default List;
