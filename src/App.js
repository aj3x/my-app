import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PotentialSkills from './PotentialSkills';
import Home from './Home';
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
        page:"character",
        text:"Character"
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
      contactIsOpen: false,
      
      
      stats:[
        {
            id:"STR",
            name:"Strength",
            value:0,
            load:0,
            sub:[
                ["Unarmed",0],
                ["Melee",0],
                ["Resistance",0],
            ]
        },
        {
            id:"SPD",
            name:"Speed",
            value:0,
            sub:[
                ["Shoot",0],
                ["Stealth",0],
                ["Athletics",0],
            ]
        },
        {
            id:"ADP",
            name:"Adaptability",
            value:0,
            sub:[
                ["Awareness",0],
                ["Self-Control",0],
                ["Scavenging",0],
                ["Drive",0],
                ["Criminality",0],
            ]
        },
        {
            id:"INT",
            name:"Intelligence",
            value:0,
            sub:[
                ["Foresight",0],
                ["Research",0],
                ["Mechanics",0],
                ["First Aid",0],
                ["Profession",0],
            ]
        },
        {
            id:"CHA",
            name:"Charisma",
            value:0,
            sub:[
                ["Networking",0],
                ["Persuasion",0],
                ["Sensitivity",0],
                ["Deception",0],
                ["Intimidation",0],
                ["Leadership",0],
            ]
        },
        {
            id:"WIL",
            name:"Will Power",
            value:0,
            sub:[],
        },
      ],
    };
  }

  handleNav(link){
    this.setState({
      navpage: link,
    });
  }
 
  contact(enable){
    this.setState({
      contactIsOpen: enable,
    });
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
        <Home visible={this.state.navpage==="home"}
        />
        <PotentialSkills visible={this.state.navpage==="skills"} stats={this.state.stats}/>
        <div style={this.state.contactIsOpen ? {}:{display:"none"}}>
          You did it!
          <a onClick={()=>this.contact(false)}>
          <div className="noselect" style={{height:"100px",width:"100px",background:"red"}}>
            <p>close</p>
          </div>
          </a>
        </div>
        <footer>
          <a className="noselect" onClick={()=>this.contact(true)}>Contact Me</a>
        </footer>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}


export default App;
