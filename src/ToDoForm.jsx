import React from 'react';

class ToDoForm extends React.Component{
    handleSubmit(e) {
        console.log("handle submit works!");
        e.preventDefault();

    };
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Start Typing..."
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ToDoForm;