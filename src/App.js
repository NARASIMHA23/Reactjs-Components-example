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


  class Google extends React.Component{
render(){
    return(
<div>
<div class="wrapper">
      <div class="first">
          <img src={name} height={50} width={120}/>
     </div>

    <div class="second">
          <input type="text"  size="65"/>
          <input type="button" value="search"/>
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

class Total extends React.Component{
render(){

  return(

    <div>
     <div class="chatname7">
     <div class="chatname8">
     
   
     </div>
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


