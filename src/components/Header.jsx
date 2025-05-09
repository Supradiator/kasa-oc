import { Link } from 'react-router-dom'
import '../css/Header.css'
import '../css/Global.css'

function Header() {
  return (
    <div className='header container'>
      <img src="src/assets/logo.svg" alt="logo kasa" />
      <nav className='nav'>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </div>
  )
}

export default Header