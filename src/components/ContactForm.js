// Install emailjs-com and import it 
import emailjs from "emailjs-com";

import React from 'react';
import './ContactForm.css'
 
// Use these two sites for editing backend
// https://www.emailjs.com/docs/examples/reactjs/
// https://dashboard.emailjs.com/admin

export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_owo8vcr', e.target, 'user_mZX0XozJeveBeueTOLbrR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <form onSubmit={sendEmail}>
                    <div className="contactContainer">
                        <div className="name">
                            <input type="text" className="form-control" placeholder="Ime i prezime" name="name"/>
                        </div>
                        <div className="email">
                            <input type="email" className="form-control" placeholder="Email" name="email"/>
                        </div>
                        <div className="message">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Napiši poruku" name="message"></textarea>
                        </div>
                        <div className="sendbtn">
                            <input type="submit" className="btn btn-info" value="Pošalji"></input>
                        </div>
                    </div>
                </form>
        </div>
    )
}