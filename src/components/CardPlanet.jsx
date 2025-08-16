import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";

export const CardPlanet = ({ planetId, planetName}) => {
    let missingPicture ="https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/placeholder.jpg?raw=true"
    let imageUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/" + planetId + ".jpg"
    const {store, dispatch} =useGlobalReducer();
    const [isFavorite,setIsFavorite]=useState(false);
    
    function setFavorite (){
        let favorites = store.favorites_planets;
        if (favorites.includes(planetId)){
            let newFavorites = favorites.filter(id => id !== planetId);
            dispatch({type:"add_favorite_planet", payload:newFavorites});
        }else{
            let newFavorites = [...favorites, planetId];
            dispatch({type:"add_favorite_planet", payload:newFavorites});
        }   
    }

    useEffect(() => {
            setIsFavorite(store.favorites_planets.includes(planetId));
        }, [store.favorites_planets, planetId]);
    
    return (
        <div className="card m-2" style={{ width: "15rem" }}>
            <img src={imageUrl} className="card-img-center mt-2" alt={missingPicture} />
            <div className="card-body">
                <h5 className="card-title">{planetName}</h5>
               
            </div>
            <div className="row justify-content-around">
                <div className="col-6 mb-2">
                     <Link to={"/planeta/" + planetId} className="btn btn-danger p-1 m-1">Details</Link>
                </div>
                <div className="col-6 mb-2">
                    <button type="button" className="btn btn-outline-dark" onClick={setFavorite}>
                        <i className={`fa-solid ${isFavorite ? "fa-thumbs-down" : "fa-thumbs-up"}`}></i></button>
                </div>

            </div>
        </div>
    )
};