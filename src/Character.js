import React from 'react'
// import { Row } from 'react-bootstrap';
import './Character.css'

class Character extends React.Component{
    constructor(props){
        super(props)
    }
    

    render(){
        var DEBUG = this.props.DEBUG;
        
        return( 
            <div>
                <h1>Character Page</h1>
                <SelectChar 
                characters={this.props.characters}
                curChar={this.props.currentChar}
                clickChar={(char) => this.props.clickChar(char)}
                >
                </SelectChar>
                <Info labels={this.props.label}
                handleCharInfo={this.props.handleCharInfo}></Info>
                <button onClick={()=>{
                    console.log(this.props)
                    console.log(this.props.DEBUG)
                    console.log(this.state)
                    
                }}>Log</button>
            </div>
        );
    }
}

class SelectChar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var test = Object.keys(this.props.characters);
        // var out = <option value="red">Red</option><option value="green">Green</option>
        return(
            <select id="charSelect" defaultValue={this.props.curChar} onChange={(evt)=>{
                // this.props.clickChar(document.getElementById("charSelect").value);
                this.props.clickChar(evt.target.value);
            }}>
                {Object.keys(this.props.characters).map((i) =>{
                    return(
                        <option value={i}>{this.props.characters[i].page.taker}</option>
                    );
                })}
            </select>
        );
    }
}
class Info extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.labels
    }

    render(){
        var left = Object.entries(this.state).map(([i,value])=>{
            var label = [i]
            return (
            <tr key="">
                <td>{i}:</td>
                <td><input defaultValue={value}
                onBlur={function (evt){
                    this.props.handleCharInfo(i,evt.target.value)
                }.bind(this)}></input></td>
            </tr>)
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

export default Character;
