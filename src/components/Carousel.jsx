import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Carousel.css'

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length)
  }

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-btn left" aria-label="Image précédente">
        <FontAwesomeIcon icon="chevron-left" />
      </button>

      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-img"
      />

      <button onClick={nextSlide} className="carousel-btn right" aria-label="Image suivante">
        <FontAwesomeIcon icon="chevron-right" />
      </button>

      {pictures.length > 1 && (
        <div className="carousel-counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  )
}

export default Carousel