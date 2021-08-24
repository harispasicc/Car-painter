import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import ContactForm from './ContactForm'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-heading'>
        Za rezervaciju termina:
      </div>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <p>Kontakt telefon:</p>
            <a>+387 62 760 481</a>
            <p>Javite nam se na mail:</p>
            <ContactForm/>
          </div>
          <div className='footer-link-items'>
          <p>Radno vrijeme:</p>
            <a>Svakim radnim danom od</a>
            <a>08:00 - 18:00</a>
            <p>Naša adresa</p>
            <a>Ulica Kurta Schorka br.18 Stup, 71000 Sarajevo</a>
            <a
            href='https://www.google.com/maps/dir/43.8199506,18.314444/43.847847,18.326483/@43.8359472,18.3022031,14z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0'
            className='location-icon'>
              <GoLocation/>
            </a>
          </div>
        </div>
      </div>
      
      <div className='media-header'>
        <p>Pratite nas i na:</p>
      </div>
      <div className='footer-link-wrapper'>
          <div class='footer-link-media-items'>
            <a 
            href='https://www.facebook.com/Autolakirnica/?ref=page_internal'
            className='media-icons'>
              <a>Facebook</a>
              <FaFacebookF/>
            </a>
          </div>
          <div className='footer-link-media-items'>
            <a
            href='https://www.instagram.com/carpro_autolakirnica/'
            className='media-icons'>
              <a>Instagram</a>
              <FaInstagram/>
            </a>
          </div>
        </div>

      <Link to='/' className='social-logo'>
        Vaš CarPro
      </Link>

    </div>
  );
}

export default Footer;
