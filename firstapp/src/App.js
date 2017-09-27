// import React, { Component } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

 const timerData=[
    {count:"10",text:"10 second"},
    {count:"20",text:"20 second"},
    {count:"30",text:"30 second"},
];
var App=React.createClass({


  getInitialState: function(){
       return {
         count: 5,
         text:timerData[0].text,
         index:0
       }
     },
     next:function(n){
       if(n<timerData.length){
         this.setState({
           count:timerData[n].count,
           text:timerData[n].text,
         })
       }

     },
     componentDidMount() {

         setInterval(() => {
           if(this.state.count>0&&!this.paused){
             this.setState({ count:this.state.count-1 })
           }

         if(this.state.count==0){
               this.state.index=this.state.index+1;
               this.next(this.state.index);
         }
            }, 1000);


 },
pause:function(){
  this.paused=!this.paused;
},

  render:function(){
    //this.dicrimentCount();
    return(
  <div onClick={this.pause}>
  <h1>{this.state.text}</h1>
        <Timer count={this.state.count} text={this.state.text}/>

  </div>

    )
  }
})

var Timer=React.createClass({

render:function(){

  return(
    <div>
      <div className="timer-wrapper">

      <h1>{this.props.count}</h1>
      </div>

    </div>
  )
}

})
export default App;
