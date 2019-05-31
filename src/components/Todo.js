import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  handleUpdate(e) {
    e.preventDefault();
    // Take new task up to parent
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleToggle(e) {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    const { task } = this.props;
    const { isEditing } = this.state;
    let result;
    if (isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              onChange={this.handleChange}
              value={this.state.task}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            onClick={this.handleToggle}
            className={
              this.props.completed ? 'Todo-task completed' : 'Todo-task'
            }
          >
            {task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>Edit</button>
            <button onClick={this.handleRemove}>X</button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
