import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <img src="src/assets/logo.svg" alt="logo kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </div>
  )
}

export default Header