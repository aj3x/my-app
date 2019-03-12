
const masterkey = "aj3xredmarketsreact";

export function loadStore(){
  let store = localStorage.getItem(masterkey);
  if(store === "undefined"){
    return undefined;
  }else{
    return JSON.parse(localStorage.getItem(masterkey));
  }
}
export function saveStore(characters){
  localStorage.setItem(masterkey,JSON.stringify(characters));
}
export function unsaveStore(){
  localStorage.removeItem(masterkey);
}