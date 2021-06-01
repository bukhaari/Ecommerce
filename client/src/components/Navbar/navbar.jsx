import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-sm position-sticky fixed-top" style={{ background: '#0a4275', height: "60px" }}>
                <NavLink className="navbar-brand text-warning" to="/">Hanbile</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link className="nav-link text-white" to="/product">Product <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link text-white" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link text-white" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-light my-2 my-sm-0" type="button">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;