import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../styles/Layout.scss' // Fichier SCSS

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Affiche la page actuelle */}
      </main>
      <Footer />
    </>
  )
}

export default Layout