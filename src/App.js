import React, { Component } from 'react';
import './App.css';
import Counter from './counter'
import store from './store/'
import './cat.jpg'
import DisplayCat from './catlist'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={store}/>
        <DisplayCat store={store}/>
      </div>
    );
  }
}

export default App;
