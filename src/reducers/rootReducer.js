import {combineReducers} from 'redux';
import stuff from './stuffReducer';
import characters from './charactersReducer';
import character from './characterReducer';

const rootReducer = combineReducers({
    stuff, characters, character
});

export default rootReducer;
