import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    useEffect(() => {
        let mainNav = document.getElementById("js-menu");
        let navBarToggle = document.getElementById("js-navbar-toggle");

        navBarToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
        });

       

    })
    return (
        <>
            <nav class="navbar">
                <span class="navbar-toggle" id="js-navbar-toggle">
                    <FontAwesomeIcon icon={faBars} />
                </span>
                <NavLink className="nav-links" aria-current="page" to="/">Shopmax</NavLink>
                <ul class="main-nav" id="js-menu">
                    <li>
                        <NavLink className="nav-links" aria-current="page" to="/Home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-links" aria-current="page" to="/Post">Post</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-links" aria-current="page" to="/Product">Product</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-links" aria-current="page" to="/Product_details">Product details</NavLink>
                    </li>

                </ul>
            </nav>


        </>
    )
}
export default Navbar;
