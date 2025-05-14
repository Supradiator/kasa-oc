import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Cards from '../components/Cards'
import Logement from '../pages/Logement'

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Cards />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Route>
    </Routes>
  )
}

export default Router