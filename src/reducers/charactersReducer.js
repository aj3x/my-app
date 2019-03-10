import initialState from './initialState';
import { EDIT_CHARACTERS, ADD_CHARACTER } from '../actions/actionTypes';

export default function characters(state = initialState.characters, action){
    let newState;
    switch (action.type) {
        case EDIT_CHARACTERS:
          return action;
        // case RECEIVE_STUFF:
        //   newState = action.stuff;
        //   console.log('RECEIVE_STUFF Action')
        //   return newState;
        case ADD_CHARACTER:
          let characters = state
          characters.push(initialState.characters[0]);
          return characters;
        default:
          return state;
      }
}