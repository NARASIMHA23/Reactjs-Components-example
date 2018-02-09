import React, { Component } from 'react';
//import logo from './logo.svg';
//import cream from './cream.jpg';
import name from './Name.png';
import search from './search.png';
import './App.css';
import ReactDOM from 'react-dom';
import apps from './apps.svg';
import noti from './index.png';
import user from './user.png';
import refresh from './refresh.jpeg';
import usr from './usr.png';
import chat from './chat.png';

class SearchBox extends Component {
    render() {
      return (
     <div>
          <input
            ref="search"
            className="searchbox" 
            type="text" 
            placeholder="type username..."/>
          <button class="searchbutton" onClick={this.buttonClick.bind(this)}>search</button>   
       </div>
       
      )
    }
    
    buttonClick(event) {
      event.preventDefault()
      let username = this.refs.search.value
      this.props.fetchuser(username)
      this.refs.search.value = ''
    }
  }
  export default SearchBox;