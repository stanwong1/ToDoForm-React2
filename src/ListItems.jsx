import React, { Component } from 'react';


class ListItems extends Component {
    render() {
        const updatedList = this.props.todos.map((todo, i)=>{
            return(
                <li key={i}>{this.props.todos[i]}</li>
                 
            )
        }) 
        console.log(this.props.todos);
        return (
            <div>
                I am list items!
                <ol>{updatedList}</ol>
            </div>
        );
    }
}

export default ListItems