import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import storeReducer from "../store.js";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
	const {store, dispatch} =useGlobalReducer();
	const [favorites,setFavorites]= useState([]);
	const [favorite_planets,setFavoritePlanets]= useState([]);
	const [favorite_ships,setFavoriteShips]= useState([]);

	function borrarFavorito(idFavorito){
		let newFavorites = store.favorites.filter(uid => uid !== idFavorito);
        dispatch({type:"add_favorite", payload:newFavorites});
	}
	function borrarPlaneta(idFavorito){
		let newFavorites = store.favorites_planets.filter(uid => uid !== idFavorito);
        dispatch({type:"add_favorite_planet", payload:newFavorites});
	}
	function borrarShip(idFavorito){
		let newFavorites = store.favorites_ships.filter(uid => uid !== idFavorito);
        dispatch({type:"add_favorite_ship", payload:newFavorites});
	}

	function cargarFavoritos (){
		let favoriteCharacters=[];
		let favoritePlanets=[];
		let favoriteShips=[];

		store.favorites.map((favorite,index,array)=>{
			favoriteCharacters.push(store.characters.find(character => character.uid === favorite));
		})
		setFavorites(favoriteCharacters);

		store.favorites_planets.map((favorite,index,array)=>{
			favoritePlanets.push(store.planets.find(planet => planet.uid === favorite));
		})
		setFavoritePlanets(favoritePlanets)

		store.favorites_ships.map((favorite,index,array)=>{
			favoriteShips.push(store.starShips.find(ship => ship.uid === favorite));
		})
		setFavoriteShips(favoriteShips);
	}

	 useEffect(() => {
		cargarFavoritos();
	}, [store.favorites_planets, store.favorites_ships, store.favorites]);


	return (
		<nav className="navbar navbar-light bg-secondary">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><b>Star Wars Blog</b></span>
				</Link>
				<div className="ml-auto">
					 <li className="nav-item btn-group dropstart">
          				<a className="btn btn-danger dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            				<b>Favorites</b>
          				</a>
          				<ul className="dropdown-menu" style={{width:"15rem"}}>
            				{favorites.map((favorite,index,array)=>{
								return(
										<li key= {index} >
											<div className="row">
												<div className="col-9">
													<Link className="dropdown-item " to={"/personaje/" + favorite.uid}>
														{favorite.name} 
													</Link>
												</div>
												<div className="col-2">
													<button className="btn btn-sm btn-outline-secondary" onClick={ ()=>borrarFavorito(favorite.uid)}><i className="fa-solid fa-trash-can"></i></button>
												</div>
											</div>
											
										</li>
									)
								})
							}
            				<li><hr className="dropdown-divider"/></li>
							
							{favorite_planets.map((favorite,index,array)=>{
								return(
									<li key={index}>
										<div className="row">
											<div className="col-9">
												<Link className="dropdown-item"  to={"/planeta/" + favorite.uid} >
													{favorite.name}
												</Link>
											</div>
											<div className="col-2">
												<button className="btn btn-sm btn-outline-secondary" onClick={ ()=>borrarPlaneta(favorite.uid)}><i className="fa-solid fa-trash-can"></i></button>
											</div>
										</div>
									</li>
									)
								})
							}
							<li><hr className="dropdown-divider"/></li>
							{favorite_ships.map((favorite,index,array)=>{
								return(
										<li  key={index}>
											<div className="row">
												<div className="col-9">
													<Link className="dropdown-item" to={"/starship/" + favorite.uid}>
														{favorite.name}
													</Link>
												</div>
												<div className="col-2">
													<button className="btn btn-sm btn-outline-secondary" onClick={ ()=>borrarShip(favorite.uid)}><i className="fa-solid fa-trash-can"></i></button>
												</div>
											</div>
										</li>
								
									)
								})
							}
          				</ul>
        			</li>
				</div>
			</div>
		</nav>
	);
};