import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function characters(state = initialState.characters, action){
  let newCharacters;
  switch (action.type) {
    case types.EDIT_CHARACTER_INFO:
      return {
        ...state,
        [action.payload.index]: {
          ...state[action.payload.index],
          info:{
            ...state[action.payload.index].info,
            [action.payload.label]: action.payload.character
          }
        }
      }
      // newCharacters = state;
      // newCharacters[action.payload.index].info[action.payload.label] = action.payload.character;
      // return newCharacters;

    case types.EDIT_CHARACTER_HEALTH:
      return state;

    case types.EDIT_CHARACTER_THREATS:
      // newCharacters = state;
      // newCharacters[action.payload.id].threats
      // console.log(action);
      
      // action.payload.id
      // action.payload.threats
      return state;
    // case RECEIVE_STUFF:
    //   newState = action.stuff;
    //   console.log('RECEIVE_STUFF Action')
    //   return newState;
    case types.ADD_CHARACTER:
      // newCharacters = state
      // newCharacters.push(initialState.characters[0]);
      return [
        ...state,
        initialState.characters[0]
      ];
    default:
      return state;
  }
}