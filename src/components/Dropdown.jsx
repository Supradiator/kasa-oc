import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '../css/Dropdown.css'

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`chevron-icon ${isOpen ? 'rotate' : ''}`}
        />
      </div>

      <div className={`dropdown-wrapper ${isOpen ? 'open' : 'closed'}`}>
        <div className="dropdown-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dropdown