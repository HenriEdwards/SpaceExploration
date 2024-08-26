import './navigation.css'

export default function Navigation() {
  return (
    <div className='navigation'>
      <ul className='navbar'>
        <li><a href="#landing">Landing</a></li>
        <li><a href="#iss">ISS</a></li>
        <li><a href="#voyager">Voyager</a></li>
        <li><a href="#starship">Starship</a></li>
        <li><a href="#starlink">Starlink</a></li>
        <li><a href="#learn">Learn More</a></li>
        <li><a href="#news">News</a></li>
      </ul>
    </div>
  )
}

// import { Outlet, Link } from "react-router-dom";
// <li>
//   <Link to="/Home">Home</Link>
// </li>
// <li>
//   <Link to="/News">News</Link>
// </li>
// <li>
//   <Link to="/ISS">ISS</Link>
// </li>
// <li>
//   <Link to="/Voyager">Voyager</Link>
// </li>
// <li>
//   <Link to="/Starship">Starship</Link>
// </li>
// <li>
//   <Link to="/Starlink">Starlink</Link>
// </li>
