import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PotentialSkills from './Skills/PotentialSkills';
import Home from './Home';
import Character from './Character';
import Damage from './Health/Damage';
const pathHeader = "/myapp/";

class Navbar extends Component{
    render(){
      const links={
        home:{
          page:"",
          text:"Home",
        },
        character: {
          page:"character",
          text:"Character",
        },
        skill:{
          page:"skills",
          text:"Skills",
        },
        health:{
          page:"health",
          text:"Health",
        },
      };
      const linkCode = Object.values(links).map((item) => {
        return(
          <button key={item.page} onClick={() => this.props.onClick(item.page)}>{item.text} </button>
        );
      });
      
      const Child = ({ match }) => (
        <div>
          <h3>ID: {match.params.id}</h3>
          {/* {this.props.clickLink(match.params.id)} */}
          {this.test(match.params.id)}
        </div>
      );
  
      const linkRoute = Object.values(links).map((item) => {
        return(
          <li key={item.page}><Link to={pathHeader + item.page}>{item.text}</Link></li>
        );
      })
      
      
  
      return (
        <div>
        <Router>
          <div>
          <nav>
          <h2>{this.props.label.taker}</h2>
          <ul>
            {linkRoute}
          </ul>
          </nav>
  
          {/* <Route path="/:id" component={Child}></Route> */}
          <Route exact path={pathHeader} component={this.Home}/>
          <Route path={pathHeader+links.character.page} component={function (){
            return (<Character 
              label={this.props.label}
              currentChar={this.props.currentChar}
              DEBUG={this.props.DEBUG}
              clickChar={this.props.clickChar}
              characters={this.props.characters}
              handleCharInfo={this.props.handleCharInfo}></Character>)
          }.bind(this)}/>
          <Route path={pathHeader+links.skill.page} component={function (){
            return(<PotentialSkills stats = {this.props.stats}/>)
          }.bind(this)}/>
          <Route path={pathHeader+links.health.page} component={function() {
            return(<Damage health = {this.props.health}/>)
            }.bind(this)}/>
            </div>
        </Router>
        </div>
      );
    }
    Home(){
      return (<Home></Home>)
    }
}

export default Navbar;