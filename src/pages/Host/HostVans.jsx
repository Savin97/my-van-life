import React from "react";
import {Link} from "react-router-dom";
import { getHostVans } from "../../api";

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState([])
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setHostVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [] )
    
    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return (
            <>
                <h1>Error occured</h1>
                <Link to="/">Return home</Link>
            </>
        )
    }

    return (
        
            <div className="main-container">
                <h1 className="main-container-title">
                    Your listed vans
                </h1>
            {hostVans.map(hostVan => (
                <Link key={hostVan.id} className="host-van-card" to={hostVan.id}>
                        <img src={hostVan.imageUrl} alt="Van" />
                        <div className="host-van-card-details">
                            <h2>{hostVan.name}</h2>
                            <p>${hostVan.price}/day</p>
                        </div>
                </Link>
            ))}
            </div>
    )
}