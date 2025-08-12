export const initialStore=()=>{
  return{
    characters:[],
    planets:[],
    starShips:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'load_characters':
      return {...store, characters:action.payload };
    case 'load_planets':
      return {...store, planets:action.payload };
    case 'load_star_ships':
      return {...store, starShips:action.payload };
    default:
      throw Error('Unknown action.');
  }    
}
