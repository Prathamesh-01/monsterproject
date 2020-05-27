import React, {Component} from 'react';
import {Cardlist} from './components/cardlistcomponent/cardlist';
import {SearchBox} from './components/searchboxcomponent/searchbox.js'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // Ok so what do we need here is monsters name, cool!!
      monsters: [],
      searchfield: ''
    }

  }

  // Alright so what component did mount does, is when you call the application, at the first stage
  // when you open the app, the function will run automatically
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  // Now what we want is user component, not the ones which are prebuild
  handleChange = (e) => {
    this.setState({searchfield: e.target.value})
  }

  render(){
    // 1. Lets just destructure all the things from state
    const {monsters, searchfield} = this.state
    const filteredarray = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    // If you are asking, how does filtering only once will get the job done
    // Then you are wrong, when this.setState is called on the search field, it re renders the whole page
    // Keeping components as still and then according to search field it will give the o/p
    return (
      <div className="App">
        <h1>MONSTER WIKIO</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <Cardlist monsters={filteredarray}/>
      </div>
    );
  }
}

export default App;
