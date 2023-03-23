import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div id="footer">
        <div className="d-flex flex-column flex-lg-row align-items-center">
            <div className="col-md-4 text-center">
              <h3>Dirección</h3>
              <div className="contact-item">
                  <p>Málaga, Marbella.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h3>Horarios de Trabajo</h3>
              <div className="contact-item">
                <p>Lun-Vie: 07:00 AM - 18:00 PM</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h3>Información de Contacto</h3>
              <div className="contact-item">
                  <p>Phone: +34 666 99 95 55</p>
                  <p>Email: info@multirivel.com</p>
              </div>
            </div>
        </div>
        <div className="container-fluid text-center copyrights">
            <div className="col-md-8 col-md-offset-2 pos">
            <div className="social">
                <ul>
                  <li><a href="#"><FontAwesomeIcon icon={faFacebook} className="iconSize"/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="iconSize"/></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} className="iconSize"/></a></li>
                </ul>
            </div>
          <p>&copy; 2023 MultiRivel. License: <a href="https://www.graphenecoast.com" rel="nofollow">GrapheneCoast</a></p>
          </div>
      </div>
    </div>
  )
}
