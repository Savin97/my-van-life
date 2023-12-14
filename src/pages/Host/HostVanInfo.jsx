import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
    const {currentVan} = useOutletContext();
    console.log(currentVan)
    return(
        <div className="host-van-detail-info">
            <p><span style={{fontWeight: 700}}>Name: </span>{currentVan.name}</p>
            <p><span style={{fontWeight: 700}}>Category: </span>{currentVan.type}</p>
            <p><span style={{fontWeight: 700}}>Description: </span>{currentVan.description}</p>
            <p><span style={{fontWeight: 700}}>Visibility: </span>Public</p>
        
        </div>
    )
}