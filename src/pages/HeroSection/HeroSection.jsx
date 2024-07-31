import './herosection.css'
import { Navigation } from '../../components/index';

export default function HeroSection() {
  return (
    <div className='hero-section' id='landing'>
      
      <Navigation />
      <div className="hero-content-section">
        <h1>I love Space, Technology and Human Ingenuity.</h1>
      </div>
    </div>
  )
}
