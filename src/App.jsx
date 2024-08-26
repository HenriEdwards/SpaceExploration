import './App.css';
import { HeroSection, ISS, Voyager, Starship, Starlink } from './pages';

function App() {
  return (
    <div className='items'>
      <HeroSection />
      <ISS />
      <Voyager />
      <Starship />
      <Starlink />
      <p>Footer</p>
    </div>
  )
}

export default App
