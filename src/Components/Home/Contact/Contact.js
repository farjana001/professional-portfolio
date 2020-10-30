import React from 'react';
import emailjs from 'emailjs-com';
import facebook from '../../../images/social-icons/fb.png';
import linkedIn from '../../../images/social-icons/ln.png';
import github from '../../../images/social-icons/git.png';


const onSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
        name: 'James',
        notes: 'Check this out!'
    };

    emailjs.send('<123456>', '<template_4ahiads>', templateParams, '<038ba4a4082fb3e4509bfe768aa0c8ed>')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });

    const formData = document.getElementById('form');
    formData.reset();
}



const Contact = () => {
    return (
        <div className="container-fluid p-5 mt-5 contact">
            <div className="contact-form text-center mx-auto py-5">
                <form className="form" onSubmit={onSubmit} id="form">
                    <input name="name" type="text" placeholder="Full-name" className="form-input form-control" /> <br />
                    <input name="subject" type="text" placeholder="Subject…" className="form-input form-control" /> <br />
                    <textarea name="message" type="text" placeholder="Your Message…" className="form-input-message form-control"></textarea> <br />
                    <button className="send-sms">Send Message</button>
                </form >
                <div className="social-icon">
                </div>
            </div >
        </div >
    );
};

export default Contact;