import React, { Component } from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchField : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div style={{ margin:'0 auto' }}>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
   
}

export default App;