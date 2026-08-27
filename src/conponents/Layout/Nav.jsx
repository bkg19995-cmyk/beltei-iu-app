import React from "react";
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <div
            className="container-fluid bg-white sticky-top wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                    <NavLink to="/home" className="navbar-brand d-lg-none">
                        <h1 className="fw-bold m-0">BELTEI INTERNATIONAL UNIVERSITY</h1>
                    </NavLink>

                    <button
                        type="button"
                        className="navbar-toggler me-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <NavLink
                                to="/home"
                                className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/services"
                                className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                            >
                                Services
                            </NavLink>

                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Pages
                                </a>
                                <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                    <NavLink to="/features" className="dropdown-item">
                                        Features
                                    </NavLink>
                                    <NavLink to="/team" className="dropdown-item">
                                        Our Team
                                    </NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item">
                                        Testimonial
                                    </NavLink>
                                    <NavLink to="/appoinment" className="dropdown-item">
                                        Appoinment
                                    </NavLink>
                                    <NavLink to="/error" className="dropdown-item">
                                        Error
                                    </NavLink>
                                </div>
                            </div>

                            <NavLink
                                to="/contact"
                                className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                            >
                                Contact
                            </NavLink>
                        </div>

                        <div className="ms-auto d-none d-lg-block">
                            <NavLink
                                to="/quote"
                                className="btn btn-info py-2 px-3"
                                style={{ backgroundColor: "#099fa4", borderColor: "#099fa4" }}
                                data-wow-delay="0.1s"
                            >
                                Get A Quote
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}