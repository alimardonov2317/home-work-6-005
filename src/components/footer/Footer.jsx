import React from 'react'
import "./Footer.css"
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__navbar">
                    <div className="navbar__logo">
                        <a href="#">
                            <h3>React JavaScript</h3>
                        </a>
                    </div>
                    <ul className="footer__collection">
                        <li className="footer__item">
                            <a target="_blank" href="https://t.me/samandar_2317" className="footer__link">
                                <FaTelegram className='footer__icon' />
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                <FaInstagram className='footer__icon' />
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://github.com/alimardonov2317" className="footer__link">
                                <FaGithub className='footer__icon' />
                            </a>
                        </li>

                    </ul>
                </nav>

            </div>
        </footer>
    )
}

export default Footer