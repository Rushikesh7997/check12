import logo from './logo.svg';
import './App.css';
import React from "react"
import Hello from './components/hello';
import Answer, {Answer2} from './components/ans';

function App() {

  let info = [ 
    {name: "rishi", place: "India"}, 
    {name: "rahul", place: "USA"} ,
    {name: "rohit", place: "SouthAfrica"} ,
    {name: "lokesh", place: "Rajasthan"} ,
    {name: "sahil", place: "Maharastra"} ,
    {name: "sourav", place: "Singapore"} ,
  ];

  return (
    <div className="App">
     <Hello name = "Rishi"></Hello>
     <Answer {...info[0]} />
     <Answer {...info[1]} />
     <Answer {...info[2]} />
     <Answer {...info[3]} />
     <Answer {...info[4]} />
     <Answer {...info[5]} />
     {/* <Answer name = "ejaz" place = "nagpur" />
     <Answer name = "shishir" place = "Delhi" /> */}
     {/* <Answer2></Answer2> */}
    </div>
  );
}

export default App;
