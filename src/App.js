import React, { Component } from 'react';


import './App.css';
import ReactDOM from 'react-dom';


import Google from './Google.js';

class App extends React.Component{
   constructor(props){
     super(props);

   } 
   render(){
    return(
                  <div>
                    <div>
                       <Google/>
                        </div>
            
                  </div>
          )
   
   }
  }






 ReactDOM.render(
  
    <App/>,
      document.getElementById('root')
    );
     




export default App;


