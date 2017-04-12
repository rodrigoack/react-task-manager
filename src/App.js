import React, { Component } from 'react';
import './App.css';

import Form from './Form';
import Tasks from './Tasks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>ToDo List App</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form/>
            </div>
            <div className="col-md-6">
              <Tasks/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
