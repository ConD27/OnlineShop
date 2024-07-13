import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '@/components/NavBar/NavBar'
import RoutesIndex from './routes/Index'

function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
