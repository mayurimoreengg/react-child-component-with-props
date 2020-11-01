import React from "react";
import "./style.css";
import Person from './Person';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'Mayuri',
      age: 25
    }
  }
  render() {
    return (
    <div>
      <p>Here below is the Person Component, which is child component of App</p>
      <Person name={this.state.name} age={this.state.age}/>
    </div>
  )
  }
}

export default App;
