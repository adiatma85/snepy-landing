import React from 'react'
import SneppyLogo from "../../asset/img/sneppy-logo.png"
import { Link } from "react-router-dom"
import './Navbar.scss'


function Navbar() {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-light fixed-top navbar__bg-light">
                <div className="container-fluid">
                    <div className="leftItems container">
                        <Link className="navbar-brand" to="/">
                            <img src={SneppyLogo} alt="" className="navbar__brand-logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-5" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-2">
                                    <Link className="nav-link navbar__item_text" aria-current="page" to="/">Beranda</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link navbar__item_text" aria-current="page" to="/">Tentang Kami</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link navbar__item_text" aria-current="page" to="/">FAQ</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link navbar__item_text" aria-current="page" to="/">Kontak Kami</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="rightItems">
                        <div className="collapse navbar-collapse ms-auto">
                            <span className="navbar-text">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle navbar__item_text" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Wujudkan Sneppy
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                            <li>
                                                <Link className="dropdown-item" to="/company">Company</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/community">Community</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar