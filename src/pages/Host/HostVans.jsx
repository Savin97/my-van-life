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
    

    return (
        
            <div className="host-vans-container">
                <h1>
                    Your listed vans
                </h1>
            {hostVans.map(hostVan => (
                <Link className="host-van-card" to={hostVan.id}>
                        <img src={hostVan.imageUrl} />
                        <div className="host-van-card-details">
                            <h2>{hostVan.name}</h2>
                            <p>${hostVan.price}/day</p>
                        </div>
                </Link>
            ))}
            </div>
    )
}