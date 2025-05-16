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

      <div className='desc'> {/*---> titre + location + tags + host info*/}

        <div> 
          {/* Titre du logement + Sa location */}
          <TitleLogement 
            title={logement.title}
            location={logement.location}
          />

          <div className='tags'>
            {/* Les tags */}
            <Tags tags={logement.tags} />
          </div>
        </div>

        {/* Nom + photo du hôte + avis */}
        <HostRating host={logement.host} rating={parseInt(logement.rating)} />

      </div>
      <div className='drop'>
        {/* Les 2 dropdowns descriptions et equipements */}
        <Dropdown 
          title="Équipements" 
          content={logement.equipments} 
          width='45%' 
        />
        <Dropdown 
          title="Description" 
          content={logement.description} 
          width='45%'
        />
      </div>

    </div>
  )
}

export default Logement