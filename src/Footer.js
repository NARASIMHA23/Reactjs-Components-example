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

class Footer extends React.Component{

    render(){
   
    
      return(
       <div>
         <div class="footer">
   
         <div class="foot">
           <div class="foo1">
           <button><i class="material-icons">person</i></button>
           </div>
         <div class="foo2">
         <button><i class="material-icons">chat</i></button>
         </div>
   
           </div>
   
   
           </div>
   
   
       </div>
   
      )
   
     }
   }
   export default Footer;