import './iss.css'
import { Navigation, ImageBlock } from '../../components/index';

function Iss() {

  const images = [
    { src: 'src/assets/iss1.jpg', alt: 'iss'},
    { src: 'src/assets/iss2.jpg', alt: 'iss'},
    { src: 'src/assets/iss3.jpg', alt: 'iss'},
    { src: 'src/assets/iss4.jpg', alt: 'iss'},
    { src: 'src/assets/iss5.jpg', alt: 'iss'}
  ]

  return (
    <div className='iss-section' id='iss'>
      <Navigation />
      <div className='iss-content-section'>
        <div className="para-container">
          <h2>What is the Internation Space Station ?</h2>
          <p>The International Space Station (ISS) is a modular space station (habitable artificial satellite) in low Earth orbit. It serves as a unique laboratory for scientific research across various fields such as biology, physics, astronomy, and meteorology, as well as a testbed for technologies needed for long-duration human and robotic exploration beyond Earth. Operated by an international partnership of space agencies, including NASA, Roscosmos, JAXA, ESA, and CSA, the ISS orbits the Earth approximately every 90 minutes, providing a platform for international cooperation in space exploration and research.</p>
        </div>
        <div className='image-container'>
          <ImageBlock images={images}/>
        </div>
      </div>
    </div>
  )
}

export default Iss
