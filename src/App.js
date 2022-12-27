import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = { //this is local state of the component and only the component knows about it.
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return {monsters:users}
        }
      ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return {searchField: searchField}
    })
  }

  render() {
    // console.log('render from App.js')
    const {monsters, searchField} = this.state
    const {onSearchChange} = this
    const foundMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField))
    
    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monster' className='monster-search-box'/>
        <CardList monsters={foundMonsters} />
      </div>
    );
  }
}

export default App;
