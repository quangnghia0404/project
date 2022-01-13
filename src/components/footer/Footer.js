import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div>
            <>
                {/* Hello world */}
                <footer>
                    <div className="content">
                        <div className="top">
                            {/* <div className="logo-details">
                                    <i class='fab fa-firstdraft' />
                                    <span className="logo_name"><span> </span>YGO</span>
                                </div> */}
                            <div className='buy-logo'>
                                <img src={logo} alt="" width="100px" height="100px" />
                            </div>
                            <div className="media-icons">
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-telegram" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-youtube" />
                                </a>
                            </div>
                        </div>
                        <div className="link-boxes">
                            <ul className="box">
                                <li className="link_name">Company</li>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact-us">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/sign-up">Buy Metamusk</Link>
                                </li>
                            </ul>
                            <ul className="box">
                                <li className="link_name">Introduce</li>

                                <li>
                                    <Link to="/roadmap">Road Map</Link>
                                </li>
                                <li>
                                    <Link to="/PVP">PVP</Link>
                                </li>
                                <li>
                                    <Link to="/PVE">PVE</Link>
                                </li>
                            </ul>
                            <ul className="box">
                                <li className="link_name">Introduce</li>

                                <li>
                                    <Link to="/roadmap">Road Map</Link>
                                </li>
                                <li>
                                    <Link to="/PVP">PVP</Link>
                                </li>
                                <li>
                                    <Link to="/PVE">PVE</Link>
                                </li>
                            </ul>


                            <ul className="box input-box">
                                <li className="link_name">Subscribe</li>
                                <li>
                                    <input type="text" placeholder="Enter your email" />
                                </li>
                                <li>
                                    <input type="button" defaultValue="Subscribe" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bottom-details">
                        <div className="bottom_text">
                            <span className="copyright_text">
                                Copyright © 2021 <a href="#">Quang Nghia.</a>All rights reserved
                            </span>
                            <span className="policy_terms">
                                <a href="#">Privacy policy</a>
                                <a href="#">Terms &amp; condition</a>
                            </span>
                        </div>
                    </div>

                </footer>

            </>

        </div>
    );
}

export default Footer;
