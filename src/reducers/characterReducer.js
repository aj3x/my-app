import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function character(state=initialState.currentChar, {type, payload}){
  switch(type){
    case types.SELECT_CHARACTER:
      
    
      return payload;
    // case types.ADD_CHARACTER:
    //   console.log('ADD_CHARACTER Action')
    // //   return ...state,
    // //   state.characters.
    //   // state.characters.push([initialState.characters[0]]);
    //   let newCharacters = state.characters
    //   newCharacters.push(initialState.characters);
    //   return {
    //     characters: "red"
    //   };

    default:
      return state;
  }
}