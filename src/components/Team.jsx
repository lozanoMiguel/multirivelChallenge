import React from 'react';
import '../styles/Team.css';
import Gustavo from  '../img/team/01.jpg';
import Carlos from  '../img/team/02.jpg';
import Wilder from  '../img/team/03.jpg';

export default function Team() {
  return (
    <div id="team" className="text-center">
      <div className="overlay">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Conoce al Equipo</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
          </div>
          <div id="row" className='d-flex flex-wrap flex-md-column flex-lg-row align-items-center'>
            <div className="col-md-4 team">
              <div className="thumbnail">
                <div className="team-img"><img src={ Gustavo } alt="..." /></div>
                <div className="caption">
                  <h3>Gustavo Duque</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 team">
              <div className="thumbnail">
                <div className="team-img"><img src={ Carlos } alt="..." /></div>
                <div className="caption">
                  <h3>Carlos Ríos Velez</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 team">
              <div className="thumbnail">
                <div className="team-img"><img src={ Wilder } alt="..." /></div>
                <div className="caption">
                  <h3>Wilder Ríos Velez</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
