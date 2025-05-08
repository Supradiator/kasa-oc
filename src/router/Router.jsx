import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>

      </Route>
    </Routes>
  )
}

export default Router