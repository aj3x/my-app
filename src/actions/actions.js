import * as types from './actionTypes';

// function url() {
//   return 'www.url.com';
// }

// export function receiveStuff(json) {
//   return {type: types.RECEIVE_STUFF, stuff: json.stuff};
// }

// export function fetchStuff() {
//   return dispatch => {
//     return fetch(url(), {
//       method: 'GET',
//       mode: 'cors',
//       credentials: 'include',
//       headers: {
//         'x-api-key': apiKey,
//         'Accept': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(json => dispatch(receiveStuff(json)));
//   };
// }

export function addCharacter() {
  return {
    type: types.ADD_CHARACTER,
    payload: {

    }
  }
}

export function selectCharacter(character) {
  return{
    type: types.SELECT_CHARACTER,
    payload: character,
  }
}

export function editCharacterInfo(characters) {
  return{
    type: types.EDIT_CHARACTER_INFO,
    payload: characters
  }
}

export function editCharacterThreat(id, threats) {
  return {
    type: types.EDIT_CHARACTER_THREATS,
    payload: {id, threats}
  }
}
