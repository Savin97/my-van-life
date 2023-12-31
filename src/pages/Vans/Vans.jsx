import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")

    React.useEffect( () => {
        async function loadVans(){
            setLoading(true)
            try{
                const data = await getVans()
                setVans(data)
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        loadVans()
    }, [])


    const displayedVans = typeFilter 
        ? vans.filter( van => van.type === typeFilter) 
        : vans

    const vanElements = displayedVans.map(van => (
        <div key = {van.id} className="van-card col-lg-3 col-md-6 col-sm-12">
            <Link
                to = {van.id}
                state = {{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
                >
                <img className="van-image" src={van.imageUrl} alt="Van"/>
                <div className="van-info">
                    <h2>{van.name}</h2> 
                    <p>${van.price}/day</p>
                    <i className = {`van-type ${van.type} selected`}>{van.type}</i>
                </div>
            </Link>
        </div>
    ))

    function changeFilter(key, value){
        setSearchParams( prevParams => {
            if(value === null){
                prevParams.delete(key)
            }
            else{
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>Error loading vans, please try again</h1>
    }
    console.log("T", typeFilter)
    return (
        <div className="van-list-container">
            <h1>Explore Our Van Options</h1>
            <div className="type-filters">
                <button
                    onClick={() => changeFilter("type", "simple")}
                    className = {`van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}
                        `} >Simple
                </button>
                <button
                    onClick={() => changeFilter("type", "luxury")}
                    className = {`van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}
                        `} >Luxury
                </button>
                <button
                    onClick={() => changeFilter("type", "rugged")}
                    className = {`van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}
                        `} >Rugged
                </button>
                {
                    typeFilter ? <button
                    onClick = {() => changeFilter("type",null)}
                    className = "van-type clear-filters">
                        Clear Filters</button>
                    : null
                }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}