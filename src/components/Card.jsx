import { Link } from 'react-router-dom'
import '../css/Card.css'

function Card({ key, title, cover }) {
  return (
    <Link to={`/logement/${key}`} className="card">
      <div className="card-content">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  )
}

export default Card