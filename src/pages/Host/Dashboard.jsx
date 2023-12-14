import React from "react";
import {Link} from "react-router-dom";
import { BsStarFill } from "react-icons/bs"
import { getHostVans } from "../../api";

export default function Dashboard() {
    const [hostVans, setHostVans] = React.useState([])
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    
    React.useEffect(()=> {
            setLoading(true)
            getHostVans()
            .then(data => setHostVans(data))
            .catch(err => setError(err) )
            .finally(setLoading(false))
    }, [])

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

    function renderHostVans(vans){
        const hostVanElements = vans.map( (hostVan) => (
            <div className="host-van-card" key={hostVan.id}>
                <img src={hostVan.imageUrl} />
                <div className="host-van-card-details">
                    <h2>{hostVan.name}</h2>
                    <p>${hostVan.price}/day</p>
                </div>
            </div>
         ))

        return (
            <section>
                {hostVanElements}
            </section>
        )
    
    }


    return (
        <div className="dashboard-container">
            <section>
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$3,250</h2>
            </section>
            <section>
                <h2>Review Score <BsStarFill className="star" /> <span>5.0/5</span></h2>
            </section>
            <section>
                <div className="listed-vans-header">
                    <h2>Your listed vans</h2>
                    <Link className="back-link" to="vans">View all</Link>
                </div>
                {loading && !hostVans ? "" 
                : renderHostVans(hostVans) }
            
            </section>
            
        </div>
    )
}