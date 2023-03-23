import React from 'react'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <div id="contact" className="text-center">
      <div className="container">
          <div className="section-title text-center">
          <h2>Contáctanos</h2>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
          </div>
          <div className="col-md-10 col-md-offset-1" id='formContainer'>
            <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-6">
                      <div className="form-group">
                      <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                      <p className="help-block text-danger"></p>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="form-group">
                      <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                      <p className="help-block text-danger"></p>
                      </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg" disabled>Enviar</button>
            </form>
          </div>
      </div>
    </div>
  )
}
