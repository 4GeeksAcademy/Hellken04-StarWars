export const initialStore=()=>{
  return{
    characters:[],
    planets:[],
    starShips:[],
    favorites:[],
    favorites_planets:[],
    favorites_ships:[]
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
    case 'add_favorite':
      return {...store, favorites:action.payload };
    case 'add_favorite_planet':
      return {...store, favorites_planets:action.payload };
    case 'add_favorite_ship':
      return {...store, favorites_ships:action.payload };
    default:
      throw Error('Unknown action.');
  }    
}
