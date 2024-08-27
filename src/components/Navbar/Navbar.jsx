import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <nav className='navbar'>
      <ul className='navbar-container'>
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/iss">ISS</Link></li>
        <li><Link to="/voyager">Voyager</Link></li>
        <li><Link to="/Starship">Starship</Link></li>
        <li><Link to="/Starlink">Starlink</Link></li>
        <li><Link to="/News">News</Link></li>
      </ul>
    </nav>
  )
}
