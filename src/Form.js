import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(){
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    alert(this.state.task);
  }

	render() {
		return (

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="task">Task</label>
          <input type="text" id="task" className="form-control" placeholder="Task"
              onChange={this.handleChange}/>
        </div>
        <button className="btn btn-default" type="submit">Create</button>
      </form>
		
    );
	}
}

export default Form;