import React, { Component } from 'react';
import './App.css';

import Task from './Task';

class Tasks extends Component {
  render() {
    return (

      <ul>
        <Task/>
      </ul>
      
    );
  }
}

export default Tasks;