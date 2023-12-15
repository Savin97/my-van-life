import React from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { getVan } from "../../api";

export default function HostVanDetail(){
    const [currentVan, setCurrentVan] = React.useState([])
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const {id} = useParams()

    React.useEffect(() => {
        async function loadVan() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setCurrentVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVan()
    }, [id] )

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

    return(
        <div className="host-vans-container">
            <Link className="back-link" to = "../vans">← Back to all vans</Link>
            <div className="host-van-detail-container">
                <div className="host-van-detail-container-top">
                    <img src={currentVan.imageUrl} alt="Van"/>
                    <div className="host-van-card-details">
                        <div className = {`van-type ${currentVan.type} selected`}>{currentVan.type}</div>
                        <h2>{currentVan.name}</h2>
                        <p>${currentVan.price}/day</p>
                    </div>
                </div>
                <nav>
                    <NavLink className="" to="." >Details</NavLink>
                    <NavLink to="pricing" >Pricing</NavLink>
                    <NavLink to="photos" >Photos</NavLink>
                </nav>
                <Outlet context = {{currentVan}} />
            </div>
        </div>
    )
}