import React from 'react';
import aboutMe from '../../../images/about.png';
import profile from '../../../images/profile.jpg';

const AboutMe = () => {
    return (
        <div className="container">
            <div className="row  mt-5 pt-5">
                <div className="col-md-6">
                    <div className="about-body text-center">
                        <h2 className="font-weight-bold">About Me</h2>
                        <img className="img-fluid profile-img my-3" src={profile} alt="" />
                        <div className="about-me">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero cumque quia quibusdam repudiandae, sed amet vitae dolores earum quo nihil officiis beatae qui dolore ipsam similique unde. Vitae tempore reprehenderit voluptatibus fuga sequi cumque qui assumenda rem doloribus, maiores minima officia, eligendi ipsa perspiciatis ex, eaque incidunt minus ratione.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-right mt-5">
                        <img className="img-fluid" src={aboutMe} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;