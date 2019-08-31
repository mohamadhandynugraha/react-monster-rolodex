import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters : []
    }
  }

  // ambil data dari API jsonplaceholder
  async componentDidMount(){
    const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUsers = await responseUsers.json();
    this.setState({monsters: jsonUsers})
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => {
          return (
            <h1 key={monster.id}>Hello, {monster.name}</h1>
          );
        })}
        <button onClick={() => this.setState({monsters: []})}>Change the name in index 0</button>
      </div>
    );
  }
}

export default App;
