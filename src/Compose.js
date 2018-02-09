import React, { Component } from 'react';
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
import Chat from './Chat'

class Compose extends React.Component{
    render(){
    
    
      
         return(
           <div>
         <div>
           <div class="wrapper2">
    
    <nav class="nav">
     
      <div>
        <button class="button button1">Compose</button> 
      </div>
      <ul class="">
        <li class=""><a href="inbox">Inbox</a></li>
        <li class=""><a href="starred">Starred</a></li>
        <li class=""><a href="sentmail">Sent Mail</a></li>
        <li class=""><a href="drafts">Drafts</a></li>
      </ul>
    </nav>
    
    </div>
    </div>
    <div>
    <Chat/>
    
      </div>
      </div>
    
     
         )
       }
      }
    
      export default Compose;