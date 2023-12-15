import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getVan } from "../../api";

export default function VanDetail(){
    const location = useLocation()
    const {id} = useParams()
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    React.useEffect( () => {
        async function loadVan(){
            setLoading(true)
            try{
                const data = await getVan(id)
                setVan(data)
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        loadVan()
    } , [id])

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return (
            <>
                <h1>Error occured</h1>
                <Link to="/vans">Return to Vans</Link>
            </>
        )
    }

    return(
        <div>
            <br/>
            <Link className="back-link-vans" to ="/vans">← Back to all vans</Link>
            {van && 
                <>
                <div className="van-detail-element">
                    <img className="van-image" src={van.imageUrl} alt="Van"/>
                    <div className="van-info">
                            <h2>{van.name}</h2> 
                            <div className = {`van-type ${van.type} selected`}>{van.type}</div>
                            <p>${van.price}/day</p>
                            <p>{van.description}</p>
                    </div>
                    
                </div>
                    <div className="rent-btn">
                        Rent this van
                    </div>
                </>
            }
        </div>
    )
}