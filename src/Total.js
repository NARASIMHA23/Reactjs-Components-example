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
import SearchBox from './SearchBox';
import Card from './Card';

class Total extends React.Component{

    constructor(props){
    super(props);
    
    this.state={
      username:'NARASIMHA23'
    }
    
    // this.state1={
    //   user:'NARASIMHULU'
    // }
    
        
    this.fetchuser=this.fetchuser.bind(this);
    // this.getuser=this.getuser.bind(this);
    }
    
    // getuser(user){
    //  let url1=`https://gitlab.com/api/v3/user/${user}`
    //  this.getApi(url1)
    // }
    
    
    
    fetchuser(username){
    
      let url = `https://api.github.com/users/${username}`
      this.fetchApi(url)
    
    }
    
    fetchApi(url) { 
        
      fetch(url)
        .then((res) => res.json() )
        .then((data) => {
          
          // update state with API data
          this.setState({
            id:data.id,
            username: data.login,
            realName: data.name,
            image: data.avatar_url,
            location: data.location,
            url: data.html_url,
            repos:data.public_repos,
            followers:data.followers,
            notFound: data.message
          })
        })
        .catch((err) => console.log('oh no!') )
    }
    
    fetchUser(username) {
      let url = `https://api.github.com/users/${username}`
      this.fetchApi(url)
    }
    
    componentDidMount() {
      let url = `https://api.github.com/users/${this.state.username}`
      this.fetchApi(url)
    }
    
    
    
    render(){
    
      return(
    
        <div>
         <div class="chatname7">
         <div class="chatname8">
         <SearchBox fetchuser={this.fetchuser}/>
         <Card data={this.state}/>
       
         </div>
       </div>
       </div>
    
      )
    }
    
    }
 export default Total;    