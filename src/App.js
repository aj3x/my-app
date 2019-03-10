import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import logo from './logo.svg';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from './actions/actions'
import {initialState} from './reducers/initialState';
import {saveStore} from './store/localStore';
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

class App extends Component {
  constructor(props) {
    super(props);
    
    this.onAddUser = this.onAddUser.bind(this)
    this.getCharacter = this.getCharacter.bind(this)
  }

  /**
   * Returns currently selected characters stats
   */
  getCharacter(){
    console.log(this)
    return this.props.characters[0];
    // return this.state.characters[this.state.currentChar];
  }

  /**
   * returns initial xml for new character
   * @param {string} name Save name
   */
  

  /**
   * Returns valid key to store character
   * @param {string} name 
   */
  getKey(name){
    var key = name;
    while(this.props.characters[key] != null){
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
  DEBUG(){
    console.log(this.state);
  }
  

  onAddUser(event){
    this.props.onAddUser(event.target.value)
  }

  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Red Markets App</h1>
          <button onClick={this.onAddUser}>REDUX DEBUG</button>
        </header>
        <Navbar 
          stats={this.getCharacter().stats}
          health={this.getCharacter().health}
          label={this.getCharacter().page}
          characters={this.props.characters}
          clickChar={char => this.handleCharSelect(char)}
          handleCharInfo={(key,info) => this.handleCharInfo(key,info)}
          clickLink={link => this.handleNav(link)}
        />

        <button onClick={() => saveStore()}>Save</button>
        <button onClick={() => this.unsave()}>Delete</button>
        <button onClick={() => this.addCharacter("new")}>Add Character</button>
        <button onClick={() => this.DEBUG()}>DEBUG</button>

        {/* <div style={this.state.contactIsOpen ? {}:{display:"none"}}>
          You did it!
          <a onClick={()=>this.contact(false)}>
          <div className="noselect" style={{height:"100px",width:"100px",background:"red"}}>
            <p>close</p>
          </div>
          </a>
        </div> */}

        <footer>
          <a className="noselect" onClick={()=>this.contact(true)}>Contact Me</a>
        </footer>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    characters: state.characters
  }
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onAddUser: addUser
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps) (App);
