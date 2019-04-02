import React from 'react';
// import { Row } from 'react-bootstrap'
import './Damage.scss';
import empty from './blank.png';
import slash from './slash.png';
import cross from './cross.png';
import filled from './filled.png';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editCharacterThreat} from '../../actions/actions'


class Health extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      health: this.props.health,
      erase: false,
    }
  }
  
  numToThreat(num){
    let text = num.toString();
    if(num === 5){
      text += ": Crack";
    }else if(num === 10){
      text += ": Crumble";
    }else if(num ===15){
      text += ": Break";
    }
    return text
  }

  onMindChange(location, number){
    this.props.editThreats(this.props.character, number)
  }

  render(){

    if(this.props.health === null){
      return(<h1>EMPTY!</h1>);
    }else{

      const threatOptions = [];
      for (let i=0; i <= 15; i++){
        threatOptions.push(<option key={i}>{this.numToThreat(i)}</option>)
      }

      // const selectThreats = Object.entries(this.props.characters[this.props.character].threats).map(([label,value])=>{


    return(
      <div>
        <h1>Health</h1>
        
        <div className="container">
        <div className="row">
          <HealthBox health={this.state.health} erase={this.state.erase}></HealthBox>
          <div className={this.state.erase ? "test selected" : "test"} onClick={function(evt){
            var erase = !this.state.erase
            this.setState({
              erase,
            })
          }.bind(this)}>Eraser</div>

          <div className="col">
            Hello
            <select 
              id="lolz"
              defaultValue={this.props.character}//this.numToThreat(this.props.characters[this.props.character].threats.detachment)} 
              onChange={(evt) => {console.log(evt.target)}}
            >
              {threatOptions}
            </select>
            <select>
              {threatOptions}
            </select>
          </div>  
        </div>
        </div>
      </div>
    );
  }}
}

class HealthBox extends React.Component{

  render(){
    function getImage(num){
      switch(num){
        case 0: return([empty,"_"]);
        case 1: return([slash,"/"]);
        case 2: return([cross,"X"]);
        default: return([filled,"#"]);
      }
      // num = Number.parseInt(num) + 1;
      // document.getElementById(this.props.id).setAttribute("src")
    }

    var out = Object.entries(this.props.health).map(([id,region])=>{
      var outer = []
      var inner = []
      var divider = 2;
      
      if(id === "head")
        divider = 5;
      else if(id === "body")
        divider = 4;
      
      for (let index = 0; index < region.length; index++) {
        var img = getImage(region[index])
        inner.push(<td key={id + " " + index}>
          <img 
          key={id + " " + index} 
          src={img[0]} alt={img[1]}
          onClick={function(evt){
            if(this.props.erase){
              region[index] = 0;
            }else if(region[index]<3){
              region[index] += 1;
            }
            this.setState({
              region,
            })
          }.bind(this)}
          /></td>)
        
        if(index % divider === divider-1){
          outer.push(<tr key={index}>{inner}</tr>)
          inner = [];
        }
      }

      var tableClass = []
      if(id === "lleg" || id === "rleg"){
        tableClass = "table-leg"
      }
      return (
      <div className={tableClass}>
        <h4>{id}</h4>
        <table className="health-table">
        <tbody>
          {outer}
        </tbody>
        </table>
      </div>)
    })

    
    console.log(this.props)
    return(

    <div className="col">
      <table className="health-box">
      <tbody>
        <tr>
          <td></td>
          <td>
            {out[0]}
          </td>
          <td></td>
        </tr>

        <tr>
          <td>{out[1]}</td>
          <td>{out[2]}</td>
          <td>{out[3]}</td>
        </tr>

        <tr>
          <td></td>
          <td>{out[4]}{out[5]}</td>
          <td></td>
        </tr>
      </tbody>
      </table>
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
    editThreats: editCharacterThreat,
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps) (Health);
