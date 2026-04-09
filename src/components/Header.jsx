import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
            <nav className='navbar bg-dark navbar-dark navbar-expand-md fixed-top'>
                <div className='container-fluid'>
                    <a href="">
                        <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" className='weblogo' />

                        <img src="https://pn-paul.netlify.app/image/logo-for-mobile.png" alt="" className='moblogo' />
                    </a>
                    {/* mobile menu */}
                    <button className='navbar-toggler' data-bs-target='#a' data-bs-toggle='collapse' >
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='a'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
                            <li className='nav-item'><Link to="/about" className='nav-link'>About</Link></li>
                            <li className='nav-item'><Link to="/brand" className='nav-link'>Brand</Link></li>
                            <li className='nav-item'><Link to="/ourteam" className='nav-link'>OurTeam</Link></li>
                            <li className='nav-item'><Link to="/pressrelease" className='nav-link'>PrssRelease</Link></li>
                            <li className='nav-item'><Link to="/contact" className='nav-link'>Contact</Link></li>
                            <li className='nav-item'><Link to="/carrer" className='nav-link'>Carrers</Link></li>
                        </ul>
                    </div>

                </div>
                {/* container-fluid */}
            </nav>
        </>
    )
}

export default Header
