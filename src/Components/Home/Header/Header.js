import React from 'react';
import Menubar from '../Menubar/Menubar';

const Header = () => {
    return (
        <div className="header-bg">
            <div className="mr-3">
                <Menubar />
                <div className="header-content text-right mr-3">
                    <h1 className="mb-1 h-text">Hello, This is Farjana Islam</h1>
                    <h4 className="mb-1">A front-end Web Developer,</h4>
                    <p className="p-text"> help designers, small agencies, businesses <br />bring their ideas to life.</p>
                    <button className="work-btn">My Works</button>
                </div>
            </div>
        </div>
    );
};

export default Header;