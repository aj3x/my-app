import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function character(state=initialState.character, {type, payload}){
  switch(type){
    case types.SELECT_CHARACTER:
      return payload;

    default:
      return state;
  }
}