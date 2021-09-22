import React from 'react'
import {
    Link,
} from "react-router-dom";

export default function Navbar({ title, text }) {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <Link class="navbar-brand" to="/">PartCombinator</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/about">About</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/contact">Contact</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/signup">Register</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/signin">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Page Header--> */}
        <header class="masthead">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>{title}</h1>
                            <span class="subheading">{text}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
