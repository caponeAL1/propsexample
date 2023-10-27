import logo from './logo.svg';
import './App.css'; 
import {usedState} from 'react';
function App(props) {
  // console.log(process.argv[0]);
  // console.log(process.argv[1]);
  // console.log(process.argv[2]);
  // console.log("you have passed a total of" +process.argv.length+ "parameters..");
 var username=prompt("Enter Your Name");
   if(props.name === username){
   
      var today=new Date();
      if(today.getHours() >= props.visitingtime)
      {
    return (
    <div className="App">
      
      <b> Welcome Mr/Ms</b>{props.firstName}&nbsp;&nbsp;
      {props.lastName}
      <input type="text" minLength="10" maxLength="20"/>
    </div>);
     } 
    
    else{
      return(<div className="App"><b> Visit  after {props.visitingtime} in your local time, Maintaince happening</b></div>);
    }
  }
    else return(<div className='App'><b>{props.username} Your account is blocekd. Please Contact the administrator.</b></div>)
}

export default App;
