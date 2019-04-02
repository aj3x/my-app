import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SELECT_CHARACTER, EDIT_CHARACTER_INFO, EDIT_CHARACTER_THREATS} from '../actions/actionTypes';
import {selectCharacter, editCharacterInfo} from '../actions/actions'
// import {selectCharacter} from '../actions/actions'
// import { Row } from 'react-bootstrap';
import './Character.scss'

class Character extends React.Component{
  constructor(props){
    super(props)
  }

  handleSelect = (char) => {
    this.props.onSelectCharacter(char);
  }

  handleEdit = (label, data) => {
    this.props.editCharacter({
      index: this.props.character,
      label: label,
      character: data
    });
    // this.setState({
    // })
  }

  displayName = (name_in) => {
    let str = String(name_in).trim();
    if(str === ""){
      return "???";
    }else{
      return str;
    }
  }
  
  render(){
    let selectedChar = this.props.characters[this.props.character];
    let info = selectedChar.info;

    var left = Object.entries(this.props.characters[this.props.character].info).map(([label,value])=>{
      return (
        <tr key={label}>
          <td>{label}:</td>
          <td><input defaultValue={value} onChange={(evt) => this.handleEdit(label, evt.target.value)}></input></td>
        </tr>
      )
    });
    
    return( 
      <div>
        <h1>Character Page</h1>
        <h2>{this.props.character}</h2>
        <h2>{this.displayName(info.taker)}</h2>
        <select id="charSelect" defaultValue={String(this.props.character)} onChange={(evt)=>{
          this.handleSelect(Number(evt.target.value));
        }}>
          {Object.keys(this.props.characters).map((i) =>{
            return(
              <option key={i} value={i}>{this.props.characters[i].info.taker}</option>
            );
          })}
        </select>
        <table className="list">
        <tbody>
          <tr>
            <td>Taker:</td>
            <td><input defaultValue={this.props.characters[this.props.character].info.taker}
            onChange={(evt) => this.handleEdit("taker", evt.target.value)}>
              
            </input></td>
          </tr>
          {left}
        </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    characters: state.characters,
    character: state.character
  };
}

function mapActionsToProps(dispatch, props) {
    return bindActionCreators({
        onSelectCharacter: selectCharacter,
        editCharacter: editCharacterInfo,
    }, dispatch)
}

// function mapDispatchToProps(dispatch) {
//   // dispatch({action})
//   // return bindActionCreators({selectCharacter}, dispatch)
//   return {
//     onSelectCharacter: (charId) => {
//       dispatch({type: SELECT_CHARACTER, payload: charId })
//     },
//     editCharacter: (chars) => {
//       dispatch({type: EDIT_CHARACTER_INFO, payload: chars})
//     }
//   }
// }
// store.dispatch({type: "lol", payload:"lolz"})

export default connect(
  mapStateToProps,
  mapActionsToProps,
  // mapDispatchToProps,
) (Character);
