import '../css/titleLogement.css'

function TitleLogement({title, location}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{location}</p>
        </div>
    )
}


export default TitleLogement