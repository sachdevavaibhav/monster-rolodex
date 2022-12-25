import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    console.log('constructor')
    super()
    this.state = { //this is local state of the component and only the component knows about it.
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return {monsters:users}
        },
        () => {
          console.log(this.state)
        }
      ))
  }

  onSearchChange(event) {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return {searchField}
    })
  }

  render() {
    console.log('render')
    const {monsters, searchField} = this.state
    const {onSearchChange} = this
    const foundMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField))
    
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monster' onChange={onSearchChange}/>
        {
          foundMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
