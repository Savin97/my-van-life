import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            This page doesn't exist.
            <br/>
            <Link to="..">Return to Home</Link>
        </div>
    )
}