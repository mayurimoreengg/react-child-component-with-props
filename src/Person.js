import React from "react";
import "./style.css";

class Person extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Person component</h1>
      <h1>Name is : {this.props.name}</h1>
      <h1>Age is : {this.props.age}</h1>
    </div>
  )
  }
}

export default Person;
