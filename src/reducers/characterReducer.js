import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function character(state=[], {type, payload}){
    switch(type){
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