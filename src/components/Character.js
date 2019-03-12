import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as characterActions from '../actions/actionTypes';
// import { Row } from 'react-bootstrap';
import '../styles/Character.css'

class Character extends React.Component{
    
    render(){
        
        return( 
            <div>
                <h1>Character Page</h1>
                <SelectChar 
                character={{
                    selected: this.props.characters[0],
                    onCharClick:(char) => this.props.clickChar(char)
                }}
                characters={this.props.characters}
                >
                </SelectChar>
                <Info info={this.props.characters[0].info}></Info>
            </div>
        );
    }
}

class SelectChar extends React.Component{
    render(){
        // var out = <option value="red">Red</option><option value="green">Green</option>
        return(
            <select id="charSelect" defaultValue={this.props.character.selected} onChange={(evt)=>{
                // this.props.clickChar(document.getElementById("charSelect").value);
                // this.props.character.onCharClick(evt.target.value);
                console.log(evt.target.value)
            }}>
                {Object.keys(this.props.characters).map((i) =>{
                    return(
                        <option key={i} value={i}>{this.props.characters[i].info.taker}</option>
                    );
                })}
            </select>
        );
    }
}
class Info extends React.Component{

  render(){
    var left = Object.entries(this.props.info).map(([label,value])=>{
      return (
        <tr key={label}>
          <td>{label}:</td>
          <td><input defaultValue={value}></input></td>
        </tr>
      )
    });
    
    return(
      <table className="list">
      <tbody>
        {left}
      </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
    return {
        characters: state.characters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        characterActions: bindActionCreators(characterActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Character);
