import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }
  componentDidMount () {
    this.setState({ friends: dummyData });
  }
  render() {
    return (
   
      <div className="PostContainer">   
        <SearchBar />
        {this.state.friends.map(friend => {
          return <PostContainer key={friend.username} friends={friend} />
        })}      
        
      </div>

    );
  }
}

export default App;
