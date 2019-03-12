import {loadStore} from '../store/localStore';
export function initChar(){
    var out = {
      info:{
        taker: "new",
        crew: "",
        weakspot: "",
        softspot: "",
        toughspot: "",
      },
      stats: [{
          id: "STR",
          name: "Strength",
          value: 1,
          load: 0,
          sub: [
            ["Unarmed", 0],
            ["Melee", 0],
            ["Resistance", 0],
          ]
        },
        {
          id: "SPD",
          name: "Speed",
          value: 1,
          sub: [
            ["Shoot", 0],
            ["Stealth", 0],
            ["Athletics", 0],
          ]
        },
        {
          id: "ADP",
          name: "Adaptability",
          value: 1,
          sub: [
            ["Awareness", 0],
            ["Self-Control", 0],
            ["Scavenging", 0],
            ["Drive", 0],
            ["Criminality", 0],
          ]
        },
        {
          id: "INT",
          name: "Intelligence",
          value: 1,
          sub: [
            ["Foresight", 0],
            ["Research", 0],
            ["Mechanics", 0],
            ["First Aid", 0],
            ["Profession", 0],
          ]
        },
        {
          id: "CHA",
          name: "Charisma",
          value: 1,
          sub: [
            ["Networking", 0],
            ["Persuasion", 0],
            ["Sensitivity", 0],
            ["Deception", 0],
            ["Intimidation", 0],
            ["Leadership", 0],
          ]
        },
        {
          id: "WIL",
          name: "Will Power",
          value: 1,
          sub: [],
        },
      ],

      health: {
        head:[],
        larm:[],
        body:[],
        rarm:[],
        lleg:[],
        rleg:[],
      },
      humanity:{
        detachment: 0,
        stress: 0,
        trauma: 0,
      }
    }
    


    for (let i = 0; i < 20; i++) {
      if(i < 10){
          out.health.head[i] = 0;
          out.health.larm[i] = 0;
          out.health.rarm[i] = 0;
          out.health.lleg[i] = 0;
          out.health.rleg[i] = 0;
      }
      out.health.body[i] = 0;  
    }

    return out
}


export function initLoad(){
    let state={
      characters: [],
      currentChar: 0,
    };

    let characters = loadStore();

    if(characters === undefined){
      state.characters = [initChar()];
    }else{
      state.characters = characters;
    }
    return state;

    
    // this.state={
    //     contactIsOpen: false,
    //     characters: {},
    //     currentChar: 0,
    //   }
    //   this.state.characters = JSON.parse(localStorage.getItem(masterkey));
    //   if (this.state.characters == null){
    //     this.state.characters = { }
    //     this.state.characters.default=this.initChar("default");
    //   };
}

export default {
    stuff: [],
    currentChar: 0,
    characters: [initChar()]
};