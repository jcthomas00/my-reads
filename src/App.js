import './App.css';
import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';

class App extends Component {
  render() {
    return (
      <div className="App books">
        <Header />
        <div className="container">
          <Books />
        </div>
      </div>
    );
  }
}

export default App;
