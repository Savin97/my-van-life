import React from "react";


export default function Footer(){
    const date = new Date()
    return(
        <footer>
            ©{date.getFullYear()} #VANLIFE
        </footer>
    )
}