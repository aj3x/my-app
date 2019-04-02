import React, { Component } from 'react';
import Navbar from './components/Navbar'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCharacter, selectCharacter, editCharacterThreat } from './actions/actions'
import {saveStore, unsaveStore} from './store/localStore';

import UITest from './components/UITest';
import './App.scss';
require('react-bootstrap');


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
    return this.props.characters[this.props.character];
  }
  

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
  

  onAddUser(event){
    this.props.onAddUser(event.target.value)
  }
  handleSelect = (char) => {
    this.props.onSelectCharacter(char);
  }

  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Red Markets App</h1>
          {/* TODO: Change app to go back to home */}
          <button onClick={this.onAddUser}>REDUX DEBUG</button>
          <UITest></UITest>
        </header>
        
        <select id="char-select" defaultValue={String(this.props.character)} onChange={(evt)=>{
          this.handleSelect(Number(evt.target.value));
        }}>
          {Object.keys(this.props.characters).map((i) =>{
            return(
              <option key={i} value={i}>{this.props.characters[i].info.taker}</option>
            );
          })}
        </select>
        
        <Navbar 
          stats={this.getCharacter().stats}
          health={this.getCharacter().health}
          characters={this.props.characters}
        />
        
        

        <button onClick={() => saveStore(this.props.characters)}>Save</button>
        <button onClick={() => unsaveStore()}>Delete</button>
        <button onClick={() => this.props.onAddUser("new")}>Add Character</button>
        <button onClick={() => this.DEBUG()}>DEBUG</button>

        <footer>
          {/* <a className="noselect" onClick={()=>this.contact(true)}>Contact Me</a> */}
        </footer>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    characters: state.characters,
    character: state.character,
  }
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onAddUser: addCharacter,
    onSelectCharacter: selectCharacter,
    editThreats: editCharacterThreat,
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps) (App);
