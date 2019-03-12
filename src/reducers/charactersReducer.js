import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function characters(state = initialState.characters, action){
    switch (action.type) {
      case types.EDIT_CHARACTER:
        return action;
      // case RECEIVE_STUFF:
      //   newState = action.stuff;
      //   console.log('RECEIVE_STUFF Action')
      //   return newState;
      case types.ADD_CHARACTER:
        let characters = state
        characters.push(initialState.characters[0]);
        return characters;
      default:
        return state;
    }
}