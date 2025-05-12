import cardData from '../logements.json'
import Card from './Card'
import '../css/Cards.css'
import '../css/Global.css'

function Cards() {
  return (
    <div className="cards-container container">
      {cardData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </div>
  )
}

export default Cards;