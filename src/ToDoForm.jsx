import React from 'react';

class ToDoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.text)
        this.setState({
            text: ""
        })
    };
    
    handleChange(e) {
        this.setState({
            text: e.target.value
        })
        

    };

    render() {
        console.log(this.state)
        //e = event for the listener (onSubmit+onChange), need to call the e with the F above.
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        onChange={e => this.handleChange(e)}
                        type="text"
                        placeholder="Start Typing..."
                        value={this.state.text}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ToDoForm;