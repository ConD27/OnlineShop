import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '@/components/NavBar/NavBar'
import RoutesIndex from './routes/Index'
import { AuthProvider } from '@/context/AuthContext'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
