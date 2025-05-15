import { useParams } from 'react-router-dom'
import data from '../logements.json'
import Carousel from '../components/Carousel'
import '../css/Logement.css'
import TitleLogement from '../components/TitleLogement'
import Tags from '../components/Tags'
import HostRating from '../components/HostRating'

function Logement() {
  const { id } = useParams()
  const logement = data.find(item => item.id === id)

  if (!logement) return <h2>Logement introuvable</h2>

  return (
    <div className="logement-page container">

      <Carousel pictures={logement.pictures} />
      <TitleLogement 
        title={logement.title}
        location={logement.location}
      />
      <Tags tags={logement.tags} />
      <HostRating host={logement.host} rating={parseInt(logement.rating)} />

    </div>
  )
}

export default Logement