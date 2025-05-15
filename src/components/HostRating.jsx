import '../css/HostRating.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HostRating({ host, rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="host-rating">
      <div className="host-info">
        <p className="host-name">{host.name}</p>
        <img className="host-picture" src={host.picture} alt={`Portrait de ${host.name}`} />
      </div>

      <div className="rating">
        {stars.map((star) => (
            <FontAwesomeIcon
                key={star}
                icon={star <= rating ? ['fas', 'star'] : ['far', 'star']}
                className="star"
            />
        ))}
      </div>
    </div>
  )
}

export default HostRating