import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
            <Link className="navbar__link" to ="/"
                >
                    Home
                </Link>
                </li>
            <li className="navbar__item">
            <Link className="navbar__link" to ="/joblistings"
                >
                    Job Listings
                </Link>
                </li>
            <li className="navbar__item">
            <Link className="navbar__link" to ="/myprofile"
                >
                    My Profile
                </Link>
                </li>
            {
                (localStorage.getItem("jobify_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("jobify_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
