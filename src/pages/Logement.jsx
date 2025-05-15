import { useParams } from 'react-router-dom'
import data from '../logements.json'
import Carousel from '../components/Carousel'
import '../css/Logement.css'
import TitleLogement from '../components/TitleLogement'
import Tags from '../components/Tags'
import HostRating from '../components/HostRating'
import Dropdown from '../components/Dropdown'

function Logement() {
  const { id } = useParams()
  const logement = data.find(item => item.id === id)

  if (!logement) return <h2>Logement introuvable</h2>

  return (
    <div className="logement-page container">

      {/* Carousel */}

      <Carousel pictures={logement.pictures} />

      {/* Titre du logement + Sa location */}

      <TitleLogement 
        title={logement.title}
        location={logement.location}
      />

      {/* Les tags */}

      <Tags tags={logement.tags} />

      {/* Nom + photo du hôte + avis */}

      <HostRating host={logement.host} rating={parseInt(logement.rating)} />

      {/* Les 2 dropdowns descriptions et equipements */}

      <Dropdown title="Équipements" content={logement.equipments} />
      <Dropdown title="Description" content={logement.description} />

    </div>
  )
}

export default Logement