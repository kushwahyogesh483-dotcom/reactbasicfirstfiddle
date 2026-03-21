import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
            <nav className='navbar bg-dark navbar-dark navbar-expand-md fixed-top'>
                <div className='container-fluid'>
                    <a href="">
                        <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" className='weblogo' />
                    </a>

                    <div>
                        <ul className='navbar-nav'>
                            <li><Link to="/" className='nav-link'>Home</Link></li>
                            <li><Link to="/about" className='nav-link'>About</Link></li>
                            <li><Link to="/brand" className='nav-link'>Brand</Link></li>
                            <li><Link to="/ourteam" className='nav-link'>OurTeam</Link></li>
                            <li><Link to="/" className='nav-link'>PrssRelease</Link></li>
                            <li><Link to="/" className='nav-link'>Contact</Link></li>
                            <li><Link to="/" className='nav-link'>Carrer</Link></li>
                        </ul>
                    </div>

                </div>
                {/* container-fluid */}
            </nav>
        </>
    )
}

export default Header
