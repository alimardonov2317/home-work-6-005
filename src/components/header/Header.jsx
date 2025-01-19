import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar  container">
                <div className="navbar__logo">
                    <a href="#">
                        <h3>React JavaScript</h3>
                    </a>
                </div>
                <form className="navbar__form">
                    <input className="navbar__input" type="search" />
                    <button className="navbar__btn">Search</button>
                </form>
                <ul className="navbar__collection">
                    <li className="navbar__item">
                        <a href="./index.html" className="navbar__link"><span>Home</span></a>
                    </li>
                    <li className="navbar__item">
                        <a href="./user.html" className="navbar__link"><span>About</span></a>
                    </li>
                    <li className="navbar__item">
                        <a href="./post.html" className="navbar__link"><span>Contact</span></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header