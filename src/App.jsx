import './App.css';
import { Landing, ISS, Voyager, Starship, Starlink, News } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components'

function App() {
  return (
    <>
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/iss" element={<ISS />} />
        <Route path="/voyager" element={<Voyager />} />
        <Route path="/starship" element={<Starship />} />
        <Route path="/starlink" element={<Starlink />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
    </>
  )
}

export default App
