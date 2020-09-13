import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {

  const[personState, setPersonState] = useState({

    person: [
      { name: "Ashish", age: 25 },
      { name: "Prince", age: 24 },
      { name: "Shubham", age: 20 },
    ],

  })

  const switchNameHandler = ()=> {
    
    this.setState({

      person: [
        { name: "Ashish!!!", age: 26 },
        { name: "Prince", age: 19 },
        { name: "Shubham!!!", age: 21 },
      ],

    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>   
      <button onClick = {this.switchNameHandler}>click me</button>
      <Person
        name={this.state.person[0].name}
        age={this.state.person[0].age}
      />
      <Person
        name={this.state.person[1].name}
        age={this.state.person[1].age}
      />
      <Person name={this.state.person[2].name} age={this.state.person[2].age}>
        My Hobbies : playing and watching cricket
      </Person>
    </div>
  );



  };

  
  


export default App;
