import React from 'react'
import NavBar from './NavBar'
const Header = () => {
    return (
        <header>
            <div className="container">
                <figure>
                    <img src="/dc-logo.png" alt="Logo DC" />
                </figure>
                <NavBar />
            </div>
        </header>
    )
}

export default Header