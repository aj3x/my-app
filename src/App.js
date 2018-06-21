import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PotentialSkills from './PotentialSkills';
require('react-bootstrap');

class NameForm extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
      </form>
    );
  }
}

class Navbar extends Component{
  render(){
    const links=[
      {
        page:"home",
        text:"Home"
      },
      {
        page:"contact",
        text:"Contact Me"
      },
      {
        page:"skills",
        text:"Skills"
      }
    ];
    const linkCode = links.map((item) => {
      return(
        <button key={item.page} onClick={() => this.props.onClick(item.page)}>{item.text} </button>
      );
    });
    return (
      <nav>
        {linkCode}
      </nav>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navpage: "skills",
      
      skillPage: <PotentialSkills />
    };
  }

  handleNav(link){
    this.setState({
      navpage: link,
    });
  }

  Nav(i){
    switch(i){
      case "home":return (
        "Yay!! Welcome home!"
      );
  
      case "contact":return(
        <div>
          <h2>Contact Us</h2>
          <NameForm/>
        </div>
      );
  
      case "skills":return(
        <PotentialSkills />
      );
  
      default: return (
        "Uh-oh something went wrong!"
      );
    }
  }
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Red Markets App</h1>
        </header>
        <Navbar 
          onClick={link => this.handleNav(link)}
        />
        
        {this.Nav(this.state.navpage)}
        <p className="App-intro">
        </p>
      </div>
    );
  }
}


export default App;
