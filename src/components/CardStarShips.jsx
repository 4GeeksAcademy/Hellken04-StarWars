import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";

export const CardStarShip = ({shipId,shipName}) =>{
	
	let imageUrl="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/"+shipId+".jpg"
     const {store, dispatch} =useGlobalReducer();
        const [isFavorite,setIsFavorite]=useState(false);
        
        function setFavorite (){
            let favorites = store.favorites_ships;
            if (favorites.includes(shipId)){
                let newFavorites = favorites.filter(id => id !== shipId);
                dispatch({type:"add_favorite_ship", payload:newFavorites});
            }else{
                let newFavorites = [...favorites, shipId];
                dispatch({type:"add_favorite_ship", payload:newFavorites});
            }   
        }
    
        useEffect(() => {
                setIsFavorite(store.favorites_ships.includes(shipId));
            }, [store.favorites_ships, shipId]);
    
    return(
        <div className="card m-2" style={{width:"15rem"}}>
            <img src={imageUrl} className="card-img-top mt-2" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{shipName}</h5>
                 
            </div>
             <div className="row justify-content-around">
                <div className="col-6 mb-2">
                     <Link to={"/starship/" + shipId} className="btn btn-danger p-1 m-1">Details</Link>
                </div>
                <div className="col-6 mb-2">
                    <button type="button" className="btn btn-outline-dark" onClick={setFavorite}>
                        <i className={`fa-solid ${isFavorite ? "fa-thumbs-down" : "fa-thumbs-up"}`}></i>
                    </button>
                </div>

            </div>
        </div>
    )
};