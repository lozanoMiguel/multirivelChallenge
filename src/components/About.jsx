import React from 'react'
import '../styles/About.css';
import imagen from '../img/MULTIRIVEL.jpg'



export default function About() {

 

  return (
    
      <div id="about" >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 d-flex justify-content-center">
              <div className="about-img"><img src={ imagen } loading="lazy" className="img-responsive" alt="" /></div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Nuestra empresa</h2>
                <hr />
                <h3>Rivel Company</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
  )
}
