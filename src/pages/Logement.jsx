import { useParams } from 'react-router-dom'
import data from '../logements.json'
import Carousel from '../components/Carousel'
import '../css/Logement.css'
import TitleLogement from '../components/TitleLogement'

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
    </div>
  )
}

export default Logement