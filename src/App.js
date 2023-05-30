import React from 'react';
import Dropdown from './dropdown/dropdown';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      clicked : false
    };
  }
  handleClick = () => {
    this.setState({ clicked : !this.state.clicked});
  };
  render(){
    const {clicked}=this.state
    return (
      <>
      
      < Dropdown clicked={clicked} handleClick = {this.handleClick}/>
      </>
    )
  };
  
}

export default App;
