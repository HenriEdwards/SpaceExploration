import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import { Landing, ISS, Voyager, Starship, Starlink } from './pages';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components'

function App() {
  const location = useLocation();

  return (

    <>
    <Navbar />
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="fade"
      >
        <div className='route-section app-container'>
          <Routes location={location}>
            <Route path="/spacelog/" element={<Landing />} />
            <Route path="/spacelog/iss" element={<ISS />} />
            <Route path="/spacelog/voyager" element={<Voyager />} />
            <Route path="/spacelog/starship" element={<Starship />} />
            <Route path="/spacelog/starlink" element={<Starlink />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
    </>
  );
}

export default App