import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            This page doesn't exist.
            Go home:
            <br/>
            <Link to="/">Go Home</Link>
        </div>
    )
}