import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import logo from './logo.svg';

import { createStore } from 'redux'
require('react-bootstrap');

const masterkey = "aj3xredmarketsreact";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      navpage: "",
      contactIsOpen: false,
      characters: {},
      currentChar: "default",
      DEBUG:0,
    }
    this.state.characters = JSON.parse(localStorage.getItem(masterkey));
    if (this.state.characters == null){
      this.state.characters = { }
      this.state.characters.default=this.initChar("default");
    };
  }

  /**
   * Returns currently selected characters stats
   */
  getCharacter(){
    return this.state.characters[this.state.currentChar];
  }

  /**
   * returns initial xml for new character
   * @param {string} name Save name
   */
  initChar(name){
    var out = {
      page:{
      taker: name,
      crew: "",
      weakspot: "",
      softspot: "",
      toughspot: "",
      },
      stats: [{
          id: "STR",
          name: "Strength",
          value: 0,
          load: 0,
          sub: [
            ["Unarmed", 0],
            ["Melee", 0],
            ["Resistance", 0],
          ]
        },
        {
          id: "SPD",
          name: "Speed",
          value: 0,
          sub: [
            ["Shoot", 0],
            ["Stealth", 0],
            ["Athletics", 0],
          ]
        },
        {
          id: "ADP",
          name: "Adaptability",
          value: 0,
          sub: [
            ["Awareness", 0],
            ["Self-Control", 0],
            ["Scavenging", 0],
            ["Drive", 0],
            ["Criminality", 0],
          ]
        },
        {
          id: "INT",
          name: "Intelligence",
          value: 0,
          sub: [
            ["Foresight", 0],
            ["Research", 0],
            ["Mechanics", 0],
            ["First Aid", 0],
            ["Profession", 0],
          ]
        },
        {
          id: "CHA",
          name: "Charisma",
          value: 0,
          sub: [
            ["Networking", 0],
            ["Persuasion", 0],
            ["Sensitivity", 0],
            ["Deception", 0],
            ["Intimidation", 0],
            ["Leadership", 0],
          ]
        },
        {
          id: "WIL",
          name: "Will Power",
          value: 0,
          sub: [],
        },
      ],

      health: {
        head:[],
        larm:[],
        body:[],
        rarm:[],
        lleg:[],
        rleg:[],
      },
    }
    


    for (let i = 0; i < 20; i++) {
      if(i < 10){
          out.health.head[i] = 0;
          out.health.larm[i] = 0;
          out.health.rarm[i] = 0;
          out.health.lleg[i] = 0;
          out.health.rleg[i] = 0;
      }
      out.health.body[i] = 0;  
    }

    return out
  }

  /**
   * Returns valid key to store character
   * @param {string} name 
   */
  getKey(name){
    var key = name;
    while(this.state.characters[key] != null){
      key = key + Math.trunc(Math.random()*100);
    }
    return key;
  }

  addCharacter(name) {
    // console.log("key:"+key)
    var tempChar = this.state.characters;
    tempChar[this.getKey(name)]= this.initChar(name)
    // var lolz = {characters:{ [this.getKey(name)]: this.initChar(name) }}
    this.setState({
      characters: tempChar,
      currentChar: name,
    })
  }

  handleNav(link){
    this.setState({
      navpage: link,
    });
  }
  handleCharSelect(char){
    this.setState({
      currentChar: char,
    })
  }
  handleCharInfo(key,info){
    var tempChar = this.state.characters;
    tempChar[this.state.currentChar].page[key] = info;
    this.setState({
      characters: tempChar,
    })
  }
 
  contact(enable){
    this.setState({
      contactIsOpen: enable,
    });
  }

  load(){
    this.state.characters = JSON.parse(localStorage.getItem(masterkey));
  }
  save(){
    localStorage.setItem(masterkey,JSON.stringify(this.state.characters));
  }
  unsave(){
    localStorage.removeItem(masterkey);
  }
  DEBUG(){
    console.log(this.state);
  }
  
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Red Markets App</h1>
          {this.state.DEBUG}
        </header>
        <Navbar 
          stats={this.getCharacter().stats}
          health={this.getCharacter().health}
          label={this.getCharacter().page}
          characters={this.state.characters}
          currentChar={this.state.currentChar}
          clickChar={char => this.handleCharSelect(char)}
          handleCharInfo={(key,info) => this.handleCharInfo(key,info)}
          DEBUG={this.state.DEBUG}
          clickLink={link => this.handleNav(link)}
        />

        <button onClick={() => this.save()}>Save</button>
        <button onClick={() => this.unsave()}>Delete</button>
        <button onClick={() => this.addCharacter("new")}>Add Character</button>
        <button onClick={() => this.DEBUG()}>DEBUG</button>

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
