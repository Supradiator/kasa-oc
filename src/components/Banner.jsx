import '../css/Banner.css'
import '../css/Global.css'

function Banner({ text, image, overlayOpacity = 0.6 }) {
  const bannerStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})),
      url(${image})
    `,
  }

  return (
    <div className="banner container" style={bannerStyle}>
      {text && <h1>{text}</h1>}
    </div>
  )
}

export default Banner