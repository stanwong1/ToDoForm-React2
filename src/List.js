import React from 'react';
import './App.css';
import ListItems from './ListItems';
import ToDoForm from './ToDoForm';

class List extends React.Component{
  // constructor(props) {
  //   super(props);
  // }
  handleSubmit(e){
    console.log("handle submit works!");
    e.preventDefault();
    
  };

  render() {
    console.log(this.props.todos);
  return (
    <div className="App">
      <h1>2020's To Do List:</h1>
        <ToDoForm />
        <ListItems todos={this.props.todos}/>
    </div>
  );
  }
}

export default List;
