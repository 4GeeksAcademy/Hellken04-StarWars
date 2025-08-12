import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const CardCharacter = ({characterId,characterName,key}) =>{
	
	let imageUrl="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/"+characterId+".jpg"
    return(
        <div className="card m-1" style={{width:"15rem"}}>
            <img src={imageUrl} className="card-img-top"alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{characterName}</h5>
                <Link to={"/personaje/" + characterId} className="btn btn-light p-1 m-1">Details</Link>
            </div>
        </div>
    )
};