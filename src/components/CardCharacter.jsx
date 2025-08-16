import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardCharacter = ({characterId,characterName}) =>{
	let missingPicture ="https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/placeholder.jpg?raw=true"
	let imageUrl="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/"+characterId+".jpg"
    const {store, dispatch} =useGlobalReducer();
    const [isFavorite,setIsFavorite]=useState(false);

    function setFavorite (){
        let favorites = store.favorites;
        if (favorites.includes(characterId)){
            let newFavorites = favorites.filter(id => id !== characterId);
            dispatch({type:"add_favorite", payload:newFavorites});
            console.log("quitar",store.favorites);
        }else{
            let newFavorites = [...favorites, characterId];
            dispatch({type:"add_favorite", payload:newFavorites});
            console.log("poner",store.favorites);
        }
        
    }

    useEffect(() => {
        setIsFavorite(store.favorites.includes(characterId));
    }, [store.favorites, characterId]);

    return(
        <div className="card m-2" style={{width:"15rem"}}>
            <img src={imageUrl} className="card-img-top mt-2" alt={rigoImageUrl}/>
            <div className="card-body">
                <h5 className="card-title">{characterName}</h5>
            </div>  
            <div className="row justify-content-around">
                <div className="col-6 mb-2">
                    <Link to={"/personaje/" + characterId} className="btn btn-danger">Details</Link>
                </div>
                <div className="col-6 mb-2">
                    <button type="button" className="btn btn-outline-dark" onClick={setFavorite} >
                        <i className={`fa-solid ${isFavorite ? "fa-thumbs-down" : "fa-thumbs-up"}`}></i>
                    </button>
                </div>
                
            </div>
        </div>
    )
};