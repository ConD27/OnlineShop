import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Dashboard from '@/pages/Dashboard'
import { useAuthContext } from '@/hooks/useAuth'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/dashboard'
        element={isAuth ? <Dashboard /> : <Navigate to='/login' />}
      />
      <Route
        path='/cart'
        element={isAuth ? <Cart /> : <Navigate to='/login' />}
      />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex
