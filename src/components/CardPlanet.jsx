import { Link } from "react-router-dom";

export const CardPlanet = ({planetId,planetName,key}) =>{
	
	let imageUrl="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/"+planetId+".jpg"
    return(
        <div className="card m-1" style={{width:"15rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{planetName}</h5>
                 <Link to={"/planeta/" + planetId} className="btn btn-light p-1 m-1">Details</Link>
            </div>
        </div>
    )
};