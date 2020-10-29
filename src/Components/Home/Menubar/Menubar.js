import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <div className="pt-3 mr-3 d-flex justify-content-end">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavLink className='nav-link' to='/home'>Home</NavLink>
                        <NavLink className='nav-link' to='/projects'>Projects</NavLink>
                        <NavLink className='nav-link' to='/blogs'>Blogs</NavLink>
                        <NavLink className='nav-link' to='/about'>About me</NavLink>
                        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        <button className='resume-btn' to='/resume'>Resume</button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Menubar;