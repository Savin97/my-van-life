import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { getVan } from "../../api";

export default function HostVanDetail(){
    const [hostVan, setHostVan] = React.useState([])
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const {id} = useParams()

    React.useEffect(() => {
        async function loadVan() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setHostVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVan()
    }, [] )

    return(
        <div className="host-vans-container">
            <Link to = "../vans">← Back to all vans</Link>
            <div className="host-van-detail-container">
                <div className="host-van-detail-container-top">
                    <img src={hostVan.imageUrl} />
                    <div className="host-van-card-details">
                        <div>{hostVan.type}</div>
                        <h2>{hostVan.name}</h2>
                        <p>${hostVan.price}/day</p>
                    </div>
                </div>
                <nav>
                    <NavLink to="details" >Details</NavLink>
                    <NavLink to="pricing" >Pricing</NavLink>
                    <NavLink to="photos" >Photos</NavLink>
                </nav>
            </div>
        </div>
    )
}