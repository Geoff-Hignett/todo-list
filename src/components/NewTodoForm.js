import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: '' });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task" />
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={this.handleChange}
          id="task"
          value={this.state.task}
          name="task"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default NewTodoForm;
