import React from 'react';
import headerBg from '../../../images/header-bg2.png'
import resume from '../../../images/resume.pdf';

const Header = () => {
    return (
        <div className="header-bg">
            <div className="mr-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <img className="mt-n4 img-fluid"src={headerBg} alt="" />
                    </div>
                    <div className="col-md-7">
                        <div className="header-content text-right mr-5 mt-5">
                            <h1 className="mb-1 h-text"><span className="hello">Hello,</span> <br/> This is <span className="colored-letter">F</span>arjana Islam</h1>
                            <h4 className="mb-1">A front-end Web Developer,</h4>
                            <p className="p-text"> help designers, small agencies, businesses <br />bring their ideas to life.</p>
                            <a className="download" href={resume} download>Download Resume</a>
                            <button className="work-btn">My Works</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;