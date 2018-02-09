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

class Card extends Component {
    render() {
      let data = this.props.data
      
      if (data.notFound === 'Not Found') {
   
        return <h3>User not found. Try again!</h3>
  
      } else {
      
        return (
          <div>
  
            <a href={data.url}>
              <img src={data.image} />             
            </a>
            <br/>
            <h2>
              <a  href={data.url} target="_blank">{data.username}</a></h2>
              <br/>
            <dl>
              <dt>Full Name:{data.realName}</dt>
             
              <br/>
              
              <dt>ID:{data.id}</dt>
              <br/>
              <dt>Location:{data.location}</dt>
              
              <br/>
              <dt>Number of Repositories:{data.repos}</dt>
              <br/>
             
              <dt>Number Of Followers:{data.followers}</dt>
              
   
            </dl>
          </div>
        )
      }
    }
  }
  export default Card;