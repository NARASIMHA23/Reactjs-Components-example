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


import Compose from './Compose';
import Footer from './Footer';
import Total from './Total';


class Upcomp extends React.Component{

    render(){
 
    
      return(
        <div>
        <div class="wrapper1">
          <div class="tab1">
           <select>
             <option value="">Mail</option>
             <option value="">Contacts</option>
              <option value="">Tasks</option>
           
             </select>
             </div>
 
             
             <div class="tab2">
       <div class="btn1">
       <select>
        <option value="">select</option>
        <option value="">All</option>
        <option value="">None</option>
        <option value="">Read</option>
        <option value="">Unread</option>
        <option value="">Starred</option>
        <option value="">Unstarred</option>
 
       </select>     
       </div>
      
           <div class="btn2">
           <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
           <button   > <i class="material-icons">autorenew</i></button>        
            </div>
           <div class="btn3">
           <select>
       <option value="">More</option>
       <option value="">Mark All as Read</option>
     
 
       </select>
 
           </div>
 
 
 
       </div>
       <div class="tab3">
       <div class="btn5">
       <button ><i class="material-icons">chevron_left</i></button>
      </div>
           <div class="btn6">
           <button ><i class="material-icons">chevron_right</i></button>
           </div>
           <div class="btn7">
           <button ><i class="material-icons">settings</i> <i class="material-icons">arrow_drop_down</i></button>
           </div>
         </div>
 
 
          </div>
        
          <div class="navdiv">
           <Compose/>
 
           <div>
         <Footer/>
           </div>
 
           </div>
           <Total/>
           </div>
        
           
      )
      
    }
   }

   export default Upcomp;