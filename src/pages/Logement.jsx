import { useParams } from 'react-router-dom'
import data from '../logements.json'
import Carousel from '../components/Carousel'
import '../css/Logement.css'

function Logement() {
  const { id } = useParams()
  const logement = data.find(item => item.id === id)

  if (!logement) return <h2>Logement introuvable</h2>

  return (
    <div className="logement-page container">

      {/* Carrousel */}
      <Carousel pictures={logement.pictures} />

      {/* Autres infos */}
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      <p><strong>Localisation :</strong> {logement.location}</p>
      {/* etc. */}
    </div>
  )
}

export default Logement