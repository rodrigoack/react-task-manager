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

      <div className="well">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="task">Task</label>
            <input type="text" id="task" className="form-control" placeholder="Task"
                onChange={this.handleChange}/>
          </div>
          <button className="btn btn-primary" type="submit">Create</button>
        </form>
      </div>
		
    );
	}
}

export default Form;