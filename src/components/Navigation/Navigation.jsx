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