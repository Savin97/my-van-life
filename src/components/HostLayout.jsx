import {NavLink, Outlet} from "react-router-dom";

export default function HostLayout() {
    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <div className="host-nav-container">
            <nav>
                <NavLink to="."
                    end
                    className="host-navlink"
                    style = {({isActive}) => isActive ? activeStyles : null
                    }
                >Dashboard</NavLink>

                <NavLink
                    to="income"
                    className="host-navlink"    
                    style = {({isActive}) =>  isActive ? activeStyles : null
                    }
                >Income</NavLink>

                <NavLink
                    to="vans"
                    className="host-navlink"
                    style = {({isActive}) =>  isActive ? activeStyles : null
                    }
                >Vans</NavLink>

                <NavLink
                    to="reviews"
                    className="host-navlink"
                    style = {({isActive}) => isActive ? activeStyles : null
                    }
                >Reviews</NavLink>

            </nav>
            <Outlet/>
        </div>
    )
}