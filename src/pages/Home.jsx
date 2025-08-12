import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import { CardCharacter } from "../components/CardCharacter.jsx";
import { CardPlanet } from "../components/CardPlanet.jsx";
import { CardStarShip } from "../components/CardStarShips.jsx";

export const Home = () => {

	const [starShips,setStarShips]=useState([]);
	const [characters, setCharacters]=useState([]);
	const [planets, setPlanets] = useState([]);
	const {store, dispatch} =useGlobalReducer();
	let baseUrl ="https://www.swapi.tech/api/"
	

  function getCharacters() {
		let url = baseUrl + "people/"
		fetch(url)
			.then((response) => {
				console.log(response);
				if (response.ok == false) {
					throw new Error('Error al consultar los personajes');
				}
				return response.json();
			})
			.then((data) => {
				console.log("characters",data)
				dispatch({type:"load_characters", payload:
					data.results});
				//setCharacters(data);
				//console.log(characters)
			})
			.catch((error) => {
				alert(error);
			})
	}

	function getPlanets() {
		let url = baseUrl + "planets/"
		fetch(url)
			.then((response) => {
				console.log(response);
				if (response.ok == false) {
					throw new Error('Error al consultar los planetas');
				}
				return response.json();
			})
			.then((data) => {
				console.log("planets",data)
				dispatch({type:"load_planets", payload:
					data.results});
				console.log (store.planets)
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
				console.log("starShips",data)
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
		<div className="mt-3 container" >
			
				<div className="row scrollable-card-container m-2"  >
				
				{store.characters.map((character, index, array) => {
					return (
						<CardCharacter characterId={character.uid} characterName={character.name} key={index} />
					)
					}
				)
				}
				</div>
			
			<div className="row scrollable-card-container m-2" >
				{store.planets.map((planet, index, array) => {
					return (
						<CardPlanet planetId={planet.uid} planetName={planet.name} key={index} />
					)
					}
				)
				}
			</div>

			<div className="row scrollable-card-container m-2" >
				{store.starShips.map((planet, index, array) => {
					return (
						<CardStarShip planetId={planet.uid} planetName={planet.name} key={index} />
					)
					}
				)
				}
			</div>
		</div>
	);
}; 