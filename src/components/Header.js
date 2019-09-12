import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    let searchQueryRef = useRef('')
    let [searchQuery, setSearchQuery] = useState('')
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-0 p-0 mt-3">
                <NavLink to='/hot' className='navbar-brand' style={{ color: '#343a40' }}>
                    <h3>News (US) App</h3>
                </NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mt-3 mt-lg-0 mt-md-3 mt-sm-3" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <NavLink to='/hot' className="nav-link rounded pl-2 pr-2 pt-1 pb-1" style={{ backgroundColor: '#538AE4' }}>
                                <p className='text-white' style={{fontSize: '18px'}}>🔥 Hot</p>
                            </NavLink>
                        </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <input ref={searchQueryRef} onChange={() => setSearchQuery(searchQueryRef.current.value)} class="form-control mr-sm-2" type="search" placeholder="🔎 Search for news"/>
                        <NavLink to={`/q/${searchQuery}`}>
                            <button class="btn btn-outline-success my-2 my-sm-0">Search</button>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header