
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { CardCharacter } from "../components/CardCharacter.jsx";
import { CardPlanet } from "../components/CardPlanet.jsx";
import { CardStarShip } from "../components/CardStarShips.jsx";

export const Home = () => {

	const {store, dispatch} =useGlobalReducer();
	let baseUrl ="https://www.swapi.tech/api/"
	
  function getCharacters() {
		let url = baseUrl + "people/"
		fetch(url)
			.then((response) => {
				if (response.ok == false) {
					throw new Error('Error al consultar los personajes');
				}
				return response.json();
			})
			.then((data) => {
				dispatch({type:"load_characters", payload:
					data.results});
			})
			.catch((error) => {
				alert(error);
			})
	}

	function getPlanets() {
		let url = baseUrl + "planets/"
		fetch(url)
			.then((response) => {
				if (response.ok == false) {
					throw new Error('Error al consultar los planetas');
				}
				return response.json();
			})
			.then((data) => {
				dispatch({type:"load_planets", payload:
					data.results});
			})
			.catch((error) => {
				alert(error);
			})
	}

	function getStarShips() {
		let url = baseUrl + "starships/"
		fetch(url)
			.then((response) => {
				console.log(response);
				if (response.ok == false) {
					throw new Error('Error al consultar las naves');
				}
				return response.json();
			})
			.then((data) => {
				dispatch({type:"load_star_ships", payload:
					data.results});
			})
			.catch((error) => {
				alert(error);
			})
	}

	useEffect(()=>{
		getCharacters();
		getPlanets();
		getStarShips();
	},[])

	return (
		<div className="my-3 container bg-dark text-warning text-center" >
				<h1><b>CHARACTERS</b></h1>
				<div className="row scrollable-card-container m-4"  >
				
				{store.characters.map((character, index, array) => {
					return (
						<CardCharacter characterId={character.uid} characterName={character.name} />
					)
					}
				)
				}
				</div>

			<h1><b>PLANETS</b></h1>
			<div className="row scrollable-card-container m-4" >
				
				{store.planets.map((planet, index, array) => {
					return (
						<CardPlanet planetId={planet.uid} planetName={planet.name} />
					)
					}
				)
				}
			</div>
			
			<h1><b>STAR SHIPS</b></h1>
			<div className="row scrollable-card-container m-4" >
				{store.starShips.map((ship, index, array) => {
					return (
						<CardStarShip shipId={ship.uid} shipName={ship.name} />
					)
					}
				)
				}
			</div>
		</div>
	);
}; 