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
import Upcomp from './Upcomp';


class Google extends React.Component{
    render(){
        return(
    <div>
    <div class="wrapper">
          <div class="first">
              <img src={name} height={50} width={120}/>
         </div>
    
        <div class="second">
              <input 
               type="text"  size="65"/>
              <button  >search</button>   
    
        </div>
    
          <div class="third">
          <div class="noti1">
              <input type="image" src={apps} width="20" height="20" alt="Submit"/>
         </div>
              <div class="noti2">
              <input type="image" src={noti} width="20" height="20" alt="Submit"/>
              </div>
              <div class="noti3">
              <input type="image" src={user} width="40" height="40" alt="Submit"/>
              </div>
          </div>
          
    </div>
    <div>
    <Upcomp/>
     </div>
      </div>
    
        )
      }
    
    }
    export default Google;