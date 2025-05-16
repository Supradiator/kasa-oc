import Banner from '../components/Banner'
import Cards from '../components/Cards'

function Home() {
    return (
      <div>
        <Banner 
          text="Chez vous, partout et ailleurs"
          image="/src/assets/banner-home.svg"
          overlayOpacity={0.6}
        />
        <Cards />
      </div>
    )
  }
  
  export default Home