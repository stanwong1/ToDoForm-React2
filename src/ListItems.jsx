import React, { Component } from 'react';


class ListItems extends Component {
    render() {
        const updatedList = this.props.todos.map((todo, i)=>{
            return(
                <div> 
                    <li key={i}>{todo}</li>
                    <button onClick={() => this.props.deleteTodo(i)}>Done!</button>
                    
                </div>
                 
            )
        }) 
        return (
            <div>
                I am list items!
                <ol>{updatedList}</ol>
            </div>
        );
    }
}

export default ListItems