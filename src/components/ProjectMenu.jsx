import React,{ Suspense } from 'react'
import '../styles/ProjectMenu.css'
import villaFlorence from '../img/portfolio/V01/global/04-large-global.avif';
import villaPalma from '../img/portfolio/V02/exterior/IMG_0365.avif';
import villaOlivia from '../img/portfolio/V03/HR Villa Olivia-003.avif';
import cotoReal from '../img/portfolio/V04/OBRAS.avif';

const Project = React.lazy(() => import('./Project'))

export default function ProjectMenu() {
  return (
    <div id="proyect-menu">
      <div className="section-title text-center center">
        <div className="overlay">
          <h2>Proyectos</h2>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
        </div>
      </div>
      <div className='container'>
        <div className='d-flex flex-wrap justify-content-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <Project
              title={"Villa Florence"}
              location={"Ubicación"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."}
              img={ villaFlorence }
              navigate={"/villaflorence"}
              isDisabled={false}
              />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Project
              title={"Villa Palma"}
              location={"Ubicación"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."}
              img={ villaPalma }
              navigate={"/villapalma"}
              isDisabled={false}
            />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Project
              title={"Villa Olivia"}
              location={"Ubicación"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."}
              img={ villaOlivia }
              navigate={"/villaolivia"}
              isDisabled={false}
            />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Project
              title={"Coto Real"}
              location={"Ubicación"}
              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam."}
              img={ cotoReal }
              navigate={"#"}
              isDisabled={true}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}


