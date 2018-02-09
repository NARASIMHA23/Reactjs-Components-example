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

class Chat extends React.Component{

    render(){
      return(
        <div>
    
        <div  class="chat1">
        <div class="chatname">
        <input type="image" src={usr} width="20" height="20" alt="Submit"/>
    
        Penchal
      </div>
      </div>
    
      <div>
      
         <div class="chatname1">
         <div class="chatname2">
         <input type="image" src={usr} width="20" height="20" alt="Submit"/>
     
        Penchal
         </div>
       </div>
       </div>
    
       <div>
         <div class="chatname3">
         <div class="chatname4">
         <input type="image" src={usr} width="20" height="20" alt="Submit"/>
     
         Penchal
         </div>
       </div>
       </div>
    
       <div>
         <div class="chatname5">
         <div class="chatname6">
         <input type="image" src={usr} width="20" height="20" alt="Submit"/>
     
         Penchal
         </div>
       </div>
       </div>
       </div>
      )
    }
    
    }
    export default Chat;