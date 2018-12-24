import React from 'react'
import { Row } from 'react-bootstrap'
import './Damage.css'
import empty from './blank.png'
import slash from './slash.png'
import cross from './cross.png'
import filled from './filled.png'



class Health extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            health: this.props.health,
            erase: false,
        }
    }

    render(){

        if(this.props.health == null){
            return(<h1>EMPTY!</h1>);
        }else{
        return(
            <div>
                <h1>Health</h1>
                <div>
                <HealthBox health={this.state.health} erase={this.state.erase}></HealthBox>
                <div class="test" className={this.state.erase ? "test selected" : "test"} onClick={function(evt){
                    var erase = !this.state.erase
                    this.setState({
                        erase,
                    })
                }.bind(this)}>Eraser</div>
                </div>
            </div>
        );
    }}
}

class HealthBox extends React.Component{
    constructor(props){
        super(props);
    }
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
            
            if(id == "head")
                divider = 5;
            else if(id == "body")
                divider = 4;
            for (let index = 0; index < region.length; index++) {
                var img = getImage(region[index])
                inner.push(<td>
                    <img 
                    key={id + " " + index} 
                    src={img[0]} alt={img[1]}
                    // onClick={this.props.setHealth}
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
                
                if(index % divider == divider-1){
                    outer.push(<tr>{inner}</tr>)
                    inner = [];
                }
            }

            var tableClass = ""
            if(id == "lleg" || id == "rleg"){
                tableClass = "table-leg"
            }
            return (
            <div class={tableClass}>
                <h4>{id}</h4>
                <table class="health-table">
                <tbody>
                    {outer}
                </tbody>
                </table>
            </div>)
        })
        
        return(
        <div class="health-box">
        <table>
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

 

export default Health;
