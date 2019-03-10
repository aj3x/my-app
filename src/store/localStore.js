
const masterkey = "aj3xredmarketsreact";

function loadStore(){
  this.state.characters = JSON.parse(localStorage.getItem(masterkey));
}
export function saveStore(){
  localStorage.setItem(masterkey,JSON.stringify(this.state.characters));
}
function unsaveStore(){
  localStorage.removeItem(masterkey);
}