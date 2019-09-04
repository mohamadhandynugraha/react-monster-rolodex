import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  // ambil data dari API jsonplaceholder
  async componentDidMount(){
    const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUsers = await responseUsers.json();
    this.setState({monsters: jsonUsers})
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search your monster" handleChange={this.handleChange} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
